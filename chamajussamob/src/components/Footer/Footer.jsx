import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './FooterStyle';
import minhasOS from '../../../assets/images/minhasOS.png';
import criarOS from '../../../assets/images/criarOS.png';
import notificacoes from '../../../assets/images/notificacoes.png';
import perfil from '../../../assets/images/perfil.png';

const navItems = [
  {
    label: 'Minhas OS',
    icon: minhasOS,
    route: 'ListarOS',
  },
  {
    label: 'Criar OS',
    icon: criarOS,
    route: 'CriarOS',
  },
  {
    label: 'Notificações',
    icon: notificacoes,
    route: 'Notificacoes',
  },
  {
    label: 'Perfil',
    icon: perfil,
    route: 'Perfil',
  },
];

export default function Footer() {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      {navItems.map(({ label, icon, route }) => (
        <TouchableOpacity
          key={label}
          style={styles.footerItem}
          activeOpacity={0.7}
          onPress={() => navigation.navigate(route)}
        >
          <Image
            source={icon}
            style={styles.footerIcon}
            resizeMode="contain"
          />
          <Text style={styles.footerLabel}>
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}