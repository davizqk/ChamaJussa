import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  notificacoes: {
    flex: 1,
    backgroundColor: '#F5F6F8',
    paddingHorizontal: 16,
  },

  titulo: {
    marginTop: 56,
    marginBottom: 16,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 19,
    color: '#16181D',
    textAlign: 'center',
  },

  lista: {
    flex: 1,
  },

  listaConteudo: {
    paddingBottom: 90,
    gap: 16,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 18,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 14,
    shadowColor: '#102818',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 2,
  },

  icone: {
    width: 32,
    height: 32,
    marginTop: 2,
    resizeMode: 'contain',
  },

  conteudo: {
    flex: 1,
  },

  cardTitulo: {
    marginBottom: 6,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14.5,
    color: '#16181D',
  },

  mensagem: {
    marginBottom: 10,
    fontFamily: 'Montserrat_400Regular',
    fontSize: 13,
    lineHeight: 20,
    color: '#6B7280',
  },

  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  data: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 12.5,
    color: '#9AA1AC',
  },
});