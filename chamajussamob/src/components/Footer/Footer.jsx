import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './FooterStyle';
import minhasOS from '../../../assets/images/minhasOS.png';
import criarOS from '../../../assets/images/criarOS.png';
import notificacoes from '../../../assets/images/notificacoes.png';
import perfil from '../../../assets/images/perfil.png';

const navItems = [
  {
    label: 'Minhas OS',
    icon: minhasOS,
    route: '/os',
  },
  {
    label: 'Criar OS',
    icon: criarOS,
    route: '/os/criar',
  },
  {
    label: 'Notificações',
    icon: notificacoes,
    route: '/notificacoes',
  },
  {
    label: 'Perfil',
    icon: perfil,
    route: '/perfil',
  },
];

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.footer,
        { paddingBottom: insets.bottom + 8 },
      ]}
    >
      {navItems.map(({ label, icon, route: itemRoute }) => {
        const ativo = pathname === itemRoute;

        return (
          <TouchableOpacity
            key={label}
            style={styles.footerItem}
            activeOpacity={0.7}
            onPress={() => router.push(itemRoute)}
          >
            <Image
              source={icon}
              style={[
                styles.footerIcon,
                ativo && styles.footerIconActive,
              ]}
              resizeMode="contain"
            />
            <Text
              style={[
                styles.footerLabel,
                ativo && styles.footerLabelActive,
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}