import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../../../components/Footer/Footer';
import styles from './ListarOSStyle';

const filtros = [
  'Todos',
  'Abertas',
  'Em Andamento',
  'Concluídas',
];

const osExemplo = [
  {
    id: '001',
    numeroExibido: 'OS - 001',
    status: 'Aberta',
    titulo: 'Vazamento hidráulico no Bloco B',
    descricao:
      'Há um vazamento constante de água por baixo da pia do banheiro masculino do segundo andar do Bloco B...',
  },
];

export default function ListarOS() {
  const navigation = useNavigation();
  const [filtroAtivo, setFiltroAtivo] = useState('Todos');
  const name = 'Luis';

  function abrirDetalhes(id) {
    navigation.navigate('DetalhesOS', {
      id,
    });
  }

  function criarNovaOS() {
    navigation.navigate('CriarOS');
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

  return (
    <View style={styles.listaOs}>
      <ScrollView
        contentContainerStyle={styles.listaOsScroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.listaOsHeader}>
          <View>
            <Text style={styles.listaOsSaudacao}>
              Olá, {name}
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
        <View style={styles.listaOsFiltros}>
          <View style={styles.listaOsFiltrosLinha}>
            {filtros.slice(0, 3).map(renderFiltro)}
          </View>
          <View style={styles.listaOsFiltrosLinha}>
            {renderFiltro('Concluídas')}
          </View>
        </View>
        <View style={styles.listaOsLista}>
          {osExemplo.map((os) => {
            const statusClasse = os.status
              .toLowerCase()
              .replace(' ', '-')
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '');

            return (
              <TouchableOpacity
                style={styles.osCard}
                key={os.id}
                onPress={() => abrirDetalhes(os.id)}
                activeOpacity={0.8}
              >
                <View style={styles.osCardTopo}>
                  <Text style={styles.osCardId}>
                    {os.numeroExibido}
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
                      {os.status}
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
                  {os.descricao}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}