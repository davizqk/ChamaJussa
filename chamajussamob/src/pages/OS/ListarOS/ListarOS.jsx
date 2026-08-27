import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { useRouter } from 'expo-router';

import Footer from '../../../components/Footer/Footer';
import { useOS } from '../../../contexts/OSContext';
import { useAuth } from '../../../contexts/AuthContext';

import styles from './ListarOSStyle';

const filtros = [
  'Todos',
  'Abertas',
  'Em Andamento',
  'Concluídas',
];

const filtroParaStatus = {
  Todos: null,
  Abertas: 'aberta',
  'Em Andamento': 'andamento',
  Concluídas: 'concluida',
};

const statusLabel = {
  aberta: 'Aberta',
  andamento: 'Em Andamento',
  concluida: 'Concluída',
};

const mensagemVazia = {
  Abertas: 'Nenhuma ordem de serviço aberta',
  'Em Andamento':
    'Nenhuma ordem de serviço sendo executada',
  Concluídas:
    'Nenhuma ordem de serviço concluída',
};

export default function ListarOS() {
  const router = useRouter();

  const { ordens } = useOS();
  const { usuario } = useAuth();

  const [filtroAtivo, setFiltroAtivo] = useState('Todos');

  function abrirDetalhes(id) {
    router.push(`/os/${id}`);
  }

  function criarNovaOS() {
    router.push('/os/criar');
  }

  function renderFiltro(filtro) {
    const ativo = filtroAtivo === filtro;

    return (
      <TouchableOpacity
        key={filtro}
        style={[
          styles.listaOsFiltro,
          ativo && styles.listaOsFiltroAtivo,
        ]}
        onPress={() => setFiltroAtivo(filtro)}
        activeOpacity={0.8}
      >
        <Text
          style={[
            styles.listaOsFiltroText,
            ativo && styles.listaOsFiltroTextAtivo,
          ]}
        >
          {filtro}
        </Text>
      </TouchableOpacity>
    );
  }

  const statusFiltro = filtroParaStatus[filtroAtivo];

  const osFiltradas = statusFiltro
    ? ordens.filter(
        (os) => os.status === statusFiltro
      )
    : ordens;

  // Aceita tanto "nome" quanto "Nome"
  // dependendo de como o usuário foi salvo no AuthContext.
  const nomeUsuario =
    usuario?.nome ||
    usuario?.Nome ||
    'Usuário';

  return (
    <View style={styles.listaOs}>
      <ScrollView
        contentContainerStyle={styles.listaOsScroll}
        showsVerticalScrollIndicator={false}
      >
        {/* CABEÇALHO */}
        <View style={styles.listaOsHeader}>
          <View style={styles.listaOsSaudacaoContainer}>
            <Text style={styles.listaOsSaudacao}>
              Bem-vindo, {nomeUsuario}
            </Text>

            <Text style={styles.listaOsTitulo}>
              Minhas OS's
            </Text>
          </View>

          <TouchableOpacity
            style={styles.listaOsNovaBtn}
            onPress={criarNovaOS}
            activeOpacity={0.8}
          >
            <Text style={styles.listaOsNovaBtnTexto}>
              Nova OS
            </Text>
          </TouchableOpacity>
        </View>

        {/* FILTROS */}
        <View style={styles.listaOsFiltros}>
          <View style={styles.listaOsFiltrosLinha}>
            {filtros
              .slice(0, 3)
              .map(renderFiltro)}
          </View>

          <View style={styles.listaOsFiltrosLinha}>
            {renderFiltro('Concluídas')}
          </View>
        </View>

        {/* LISTA */}
        {osFiltradas.length === 0 ? (
          <View style={styles.listaOsVazia}>
            <Text style={styles.listaOsVaziaTexto}>
              {mensagemVazia[filtroAtivo] ||
                'Nenhuma ordem de serviço encontrada'}
            </Text>
          </View>
        ) : (
          <View style={styles.listaOsLista}>
            {osFiltradas.map((os) => {
              const statusClasse =
                os.status === 'aberta'
                  ? 'aberta'
                  : os.status === 'andamento'
                  ? 'em-andamento'
                  : 'concluida';

              return (
                <TouchableOpacity
                  style={styles.osCard}
                  key={os.id}
                  onPress={() =>
                    abrirDetalhes(os.id)
                  }
                  activeOpacity={0.8}
                >
                  <View style={styles.osCardTopo}>
                    <Text style={styles.osCardId}>
                      OS - {os.id}
                    </Text>

                    <View
                      style={[
                        styles.osCardStatus,

                        statusClasse === 'aberta' &&
                          styles.osCardStatusAberta,

                        statusClasse === 'em-andamento' &&
                          styles.osCardStatusAndamento,

                        statusClasse === 'concluida' &&
                          styles.osCardStatusConcluida,
                      ]}
                    >
                      <Text
                        style={[
                          styles.osCardStatusTexto,

                          statusClasse === 'aberta' &&
                            styles.osCardStatusTextoAberta,

                          statusClasse === 'em-andamento' &&
                            styles.osCardStatusTextoAndamento,

                          statusClasse === 'concluida' &&
                            styles.osCardStatusTextoConcluida,
                        ]}
                      >
                        {statusLabel[os.status] ||
                          'Não informado'}
                      </Text>
                    </View>
                  </View>

                  <Text style={styles.osCardTitulo}>
                    {os.titulo}
                  </Text>

                  <Text
                    style={styles.osCardDescricao}
                    numberOfLines={2}
                  >
                    {os.descricao ||
                      'Nenhuma descrição informada.'}
                  </Text>

                  <Text style={styles.osCardSolicitante}>
                    Solicitante:{' '}
                    {os.solicitante ||
                      nomeUsuario}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </ScrollView>

      <Footer />
    </View>
  );
}