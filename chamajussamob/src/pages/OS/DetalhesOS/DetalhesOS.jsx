import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import chaveIcone from '../../../../assets/images/chave-icone.png';
import localIcone from '../../../../assets/images/local-icone.png';
import usuarioIcone from '../../../../assets/images/usuario-icone.png';
import vazamentoPia from '../../../../assets/images/vazamento-pia.jpg';
import Footer from '../../../components/Footer/Footer';
import styles from './DetalhesOSStyle';

const osExemplo = {
  numero: 'OS-1001',
  titulo: 'Vazamento hidráulico',
  criadaEm: '17/06/2026, 11:29:58',
  maquina: 'Tubulação/Sifão da Pia',
  local: 'Banheiro Masculino - Bloco B - 2º Andar',
  solicitante: 'Luis Oliva',
  descricao:
    'Há um vazamento constante de água por baixo da pia do banheiro masculino do segundo andar do Bloco B. Está alagando o chão e causando risco de queda.',
};

export default function DetalhesOS() {
  const navigation = useNavigation();
  const os = osExemplo;

  function editarSolicitacao() {
    console.log('Editar solicitação');

    navigation.navigate('CriarOS');
  }

  return (
    <View style={styles.detalhesOs}>
      <Text style={styles.titulo}>
        Detalhes da {os.numero}
      </Text>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollConteudo}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <Text style={styles.problema}>
            {os.titulo}
          </Text>
          <Text style={styles.data}>
            Criada em {os.criadaEm}
          </Text>
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
                {os.maquina}
              </Text>
            </View>
          </View>
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
                {os.local}
              </Text>
            </View>
          </View>
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
                {os.solicitante}
              </Text>
            </View>
          </View>
          <View style={styles.divisor} />
          <Text style={styles.subtitulo}>
            Descrição do Problema
          </Text>
          <Text style={styles.descricao}>
            {os.descricao}
          </Text>
          <Text style={styles.subtitulo}>
            Foto do Problema
          </Text>
          <Image
            source={vazamentoPia}
            style={styles.foto}
            resizeMode="cover"
          />
        </View>
        <TouchableOpacity
          style={styles.editarBtn}
          activeOpacity={0.8}
          onPress={editarSolicitacao}
        >
          <Text style={styles.editarTexto}>
            Editar Solicitação
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer />
    </View>
  );
}