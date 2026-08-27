import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import { useRouter } from 'expo-router';

import Footer from '../../components/Footer/Footer';
import { useAuth } from '../../contexts/AuthContext';

import styles from './PerfilStyle';

export default function Perfil() {
  const router = useRouter();

  const {
    usuario,
    atualizarPerfil,
    logout,
  } = useAuth();

  const nomeUsuario =
    usuario?.nome ||
    usuario?.Nome ||
    'Usuário';

  const emailUsuario =
    usuario?.email ||
    usuario?.Email ||
    'E-mail não informado';

  const fotoUsuario =
    usuario?.foto ||
    usuario?.Foto ||
    null;

  async function alterarFoto() {
    try {
      const permissao =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permissao.granted) {
        Alert.alert(
          'Permissão necessária',
          'Permita o acesso às fotos para alterar sua foto de perfil.'
        );

        return;
      }

      const resultado =
        await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images'],
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.8,
        });

      if (resultado.canceled) {
        return;
      }

      const imagem = resultado.assets[0];

      atualizarPerfil({
        foto: imagem.uri,
      });
    } catch (error) {
      console.log(
        'Erro ao alterar foto:',
        error
      );

      Alert.alert(
        'Erro',
        'Não foi possível alterar a foto.'
      );
    }
  }

  function sair() {
    Alert.alert(
      'Sair da Conta',
      'Deseja realmente sair do sistema?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: () => {
            logout();
            router.replace('/');
          },
        },
      ]
    );
  }

  return (
    <View style={styles.perfil}>

      <View style={styles.conteudo}>

        {/* TÍTULO */}
        <Text style={styles.titulo}>
          Perfil
        </Text>

        {/* CARD DO PERFIL */}
        <View style={styles.card}>

          {/* FOTO */}
          <TouchableOpacity
            style={styles.fotoContainer}
            onPress={alterarFoto}
            activeOpacity={0.8}
          >
            {fotoUsuario ? (
              <Image
                source={{
                  uri: fotoUsuario,
                }}
                style={styles.foto}
              />
            ) : (
              <View style={styles.fotoVazia}>
                <Text style={styles.fotoInicial}>
                  {nomeUsuario
                    ?.charAt(0)
                    ?.toUpperCase() || '?'}
                </Text>
              </View>
            )}
          </TouchableOpacity>

          {/* NOME */}
          <Text style={styles.nome}>
            {nomeUsuario}
          </Text>

          {/* E-MAIL */}
          <Text style={styles.email}>
            {emailUsuario}
          </Text>

        </View>

        {/* BOTÃO SAIR */}
        <TouchableOpacity
          style={styles.botaoSair}
          onPress={sair}
          activeOpacity={0.8}
        >
          <Text style={styles.textoBotaoSair}>
            Sair da Conta
          </Text>
        </TouchableOpacity>

      </View>

      <Footer />

    </View>
  );
}