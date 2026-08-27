import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

import {
  useRouter,
  useLocalSearchParams,
} from 'expo-router';

import chaveIcone from '../../../../assets/images/chave-icone.png';
import localIcone from '../../../../assets/images/local-icone.png';
import usuarioIcone from '../../../../assets/images/usuario-icone.png';

import Footer from '../../../components/Footer/Footer';
import { useOS } from '../../../contexts/OSContext';

import styles from './DetalhesOSStyle';

export default function DetalhesOS() {
  const router = useRouter();

  const { id } = useLocalSearchParams();

  const {
    getOSPorId,
    deletarOS,
  } = useOS();

  const idOS = Array.isArray(id) ? id[0] : id;

  const os = getOSPorId(idOS);

  // ==========================================================
  // OS NÃO ENCONTRADA
  // ==========================================================

  if (!os) {
    return (
      <View style={styles.detalhesOs}>
        <View style={styles.osNaoEncontrada}>
          <Text style={styles.osNaoEncontradaTitulo}>
            Ordem de serviço não encontrada
          </Text>

          <Text style={styles.osNaoEncontradaTexto}>
            A ordem de serviço solicitada não existe ou foi removida.
          </Text>

          <TouchableOpacity
            style={styles.voltarBtn}
            onPress={() => router.replace('/os')}
            activeOpacity={0.8}
          >
            <Text style={styles.voltarTexto}>
              Voltar para Minhas OS
            </Text>
          </TouchableOpacity>
        </View>

        <Footer />
      </View>
    );
  }

  // ==========================================================
  // IMAGEM
  // ==========================================================

  function obterImagemOS() {
    if (!os) {
      return null;
    }

    if (
      typeof os.foto === 'string' &&
      os.foto.trim() !== ''
    ) {
      return os.foto;
    }

    if (
      typeof os.imagem === 'string' &&
      os.imagem.trim() !== ''
    ) {
      return os.imagem;
    }

    if (
      typeof os.fotoUri === 'string' &&
      os.fotoUri.trim() !== ''
    ) {
      return os.fotoUri;
    }

    if (os.foto?.uri) {
      return os.foto.uri;
    }

    if (os.imagem?.uri) {
      return os.imagem.uri;
    }

    if (os.fotoUri?.uri) {
      return os.fotoUri.uri;
    }

    return null;
  }

  const imagemOS = obterImagemOS();

  // ==========================================================
  // STATUS
  // ==========================================================

  const statusLabel = {
    aberta: 'Aberta',
    andamento: 'Em Andamento',
    concluida: 'Concluída',
    Pendente: 'Pendente',
    pendente: 'Pendente',
  };

  // ==========================================================
  // EDITAR
  // ==========================================================

  function editarSolicitacao() {
    router.push({
      pathname: '/os/criar',
      params: {
        editar: 'true',
        id: String(os.id),
      },
    });
  }

  // ==========================================================
  // EXCLUIR
  // ==========================================================

function excluirSolicitacao() {
  Alert.alert(
    'Excluir Solicitação',
    `Tem certeza que deseja excluir a OS - ${os.id}?`,
    [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: () => {
          const idExcluir = String(os.id);

          console.log(
            'EXCLUINDO OS:',
            idExcluir
          );

          deletarOS(idExcluir);

          // Volta para Minhas OS
          router.replace('/os');
        },
      },
    ]
  );
}

  // ==========================================================
  // TELA
  // ==========================================================

  return (
    <View style={styles.detalhesOs}>

      <Text style={styles.titulo}>
        Detalhes da OS - {os.id}
      </Text>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollConteudo}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.card}>

          {/* PROBLEMA */}

          <Text style={styles.problema}>
            {os.titulo || 'Problema não informado'}
          </Text>

          {/* DATA */}

          <Text style={styles.data}>
            {os.criadaEm
              ? `Criada em ${os.criadaEm}`
              : os.data
                ? `Criada em ${os.data}`
                : 'Data de criação não informada'}
          </Text>

          {/* STATUS */}

          <View style={styles.statusContainer}>
            <Text style={styles.statusLabel}>
              Status
            </Text>

            <Text
              style={[
                styles.statusValor,

                (os.status === 'aberta' ||
                  os.status === 'Pendente' ||
                  os.status === 'pendente') &&
                  styles.statusAberta,

                os.status === 'andamento' &&
                  styles.statusAndamento,

                os.status === 'concluida' &&
                  styles.statusConcluida,
              ]}
            >
              {statusLabel[os.status] ||
                os.status ||
                'Não informado'}
            </Text>
          </View>

          {/* MÁQUINA */}

          <View style={styles.info}>
            <Image
              source={chaveIcone}
              style={styles.icone}
              resizeMode="contain"
            />

            <View style={styles.infoConteudo}>
              <Text style={styles.label}>
                Máquina / Equipamento
              </Text>

              <Text style={styles.valor}>
                {os.maquina || 'Não informado'}
              </Text>
            </View>
          </View>

          {/* LOCAL */}

          <View style={styles.info}>
            <Image
              source={localIcone}
              style={styles.icone}
              resizeMode="contain"
            />

            <View style={styles.infoConteudo}>
              <Text style={styles.label}>
                Local / Setor
              </Text>

              <Text style={styles.valor}>
                {os.local || 'Não informado'}
              </Text>
            </View>
          </View>

          {/* SOLICITANTE */}

          <View style={styles.info}>
            <Image
              source={usuarioIcone}
              style={styles.icone}
              resizeMode="contain"
            />

            <View style={styles.infoConteudo}>
              <Text style={styles.label}>
                Solicitante
              </Text>

              <Text style={styles.valor}>
                {os.solicitante || 'Não informado'}
              </Text>
            </View>
          </View>

          <View style={styles.divisor} />

          {/* DESCRIÇÃO */}

          <Text style={styles.subtitulo}>
            Descrição do Problema
          </Text>

          <Text style={styles.descricao}>
            {os.descricao ||
              'Nenhuma descrição informada.'}
          </Text>

          {/* FOTO */}

          {imagemOS ? (
            <View style={styles.fotoContainer}>
              <Text style={styles.fotoTitulo}>
                Foto do item com problema
              </Text>

              <Image
                source={{
                  uri: imagemOS,
                }}
                style={styles.foto}
                resizeMode="cover"
              />
            </View>
          ) : (
            <View style={styles.semFoto}>
              <Text style={styles.semFotoTexto}>
                Nenhuma foto foi adicionada a esta OS.
              </Text>
            </View>
          )}

        </View>

        {/* EDITAR */}

        <TouchableOpacity
          style={styles.editarBtn}
          activeOpacity={0.8}
          onPress={editarSolicitacao}
        >
          <Text style={styles.editarTexto}>
            Editar Solicitação
          </Text>
        </TouchableOpacity>

        {/* EXCLUIR */}

        <TouchableOpacity
          style={styles.excluirBtn}
          activeOpacity={0.8}
          onPress={excluirSolicitacao}
        >
          <Text style={styles.excluirTexto}>
            Excluir Solicitação
          </Text>
        </TouchableOpacity>

      </ScrollView>

      <Footer />

    </View>
  );
}