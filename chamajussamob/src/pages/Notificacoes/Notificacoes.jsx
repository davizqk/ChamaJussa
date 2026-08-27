import {
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';

import Footer from '../../components/Footer/Footer';

import alertIcone from '../../../assets/images/alert-icone.png';

import styles from './NotificacoesStyle';

const notificacoesExemplo = [
  {
    id: '1',
    titulo: 'Ordem de Serviço finalizada',
    mensagem:
      'Sua OS foi finalizada, logo ela voltará para sua sala.',
    data: '22/06/2026',
    hora: '16:03',
  },
  {
    id: '2',
    titulo: 'Ordem de Serviço finalizada',
    mensagem:
      'Sua OS foi finalizada, logo ela voltará para sua sala.',
    data: '22/06/2026',
    hora: '16:03',
  },
  {
    id: '3',
    titulo: 'Ordem de Serviço finalizada',
    mensagem:
      'Sua OS foi finalizada, logo ela voltará para sua sala.',
    data: '22/06/2026',
    hora: '16:03',
  },
  {
    id: '4',
    titulo: 'Ordem de Serviço finalizada',
    mensagem:
      'Sua OS foi finalizada, logo ela voltará para sua sala.',
    data: '22/06/2026',
    hora: '16:03',
  },
];

export default function Notificacoes() {
  return (
    <View style={styles.notificacoes}>
      <Text style={styles.titulo}>
        Notificações
      </Text>

      <ScrollView
        style={styles.lista}
        contentContainerStyle={styles.listaConteudo}
        showsVerticalScrollIndicator={false}
      >
        {notificacoesExemplo.map((notificacao) => (
          <View
            style={styles.card}
            key={notificacao.id}
          >
            <Image
              source={alertIcone}
              style={styles.icone}
              resizeMode="contain"
            />

            <View style={styles.conteudo}>
              <Text style={styles.cardTitulo}>
                {notificacao.titulo}
              </Text>

              <Text style={styles.mensagem}>
                {notificacao.mensagem}
              </Text>

              <View style={styles.rodape}>
                <Text style={styles.data}>
                  {notificacao.data}
                </Text>

                <Text style={styles.data}>
                  {notificacao.hora}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <Footer />
    </View>
  );
}