import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import fotoPerfil from '../../../assets/images/img-perfil.jpg';
import Footer from '../../components/Footer/Footer';
import styles from './PerfilStyle';

const usuario = {
  nome: 'Davi Muniz',
  email: 'davimuniz@icloud.com',
};

export default function Perfil() {
  const navigation = useNavigation();

  function handleSair() {
    Alert.alert(
      'Sair da conta',
      'Deseja realmente sair da conta?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sair',
          onPress: () => {
            navigation.replace('Login');
          },
        },
      ]
    );
  }

  return (
    <View style={styles.perfil}>
      <Text style={styles.perfilTitulo}>
        Perfil
      </Text>
      <View style={styles.perfilCard}>
        <Image
          source={fotoPerfil}
          style={styles.perfilFoto}
          resizeMode="cover"
        />
        <Text style={styles.perfilNome}>
          {usuario.nome}
        </Text>
        <Text style={styles.perfilEmail}>
          {usuario.email}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.perfilSairBtn}
        onPress={handleSair}
        activeOpacity={0.8}
      >
        <Text style={styles.perfilSairBtnText}>
          Sair da Conta
        </Text>
      </TouchableOpacity>
      <Footer />
    </View>
  );
}