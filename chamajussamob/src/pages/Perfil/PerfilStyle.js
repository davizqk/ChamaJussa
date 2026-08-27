import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  perfil: {
    flex: 1,
    backgroundColor: '#F5F6F8',
  },

  conteudo: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 35,
  },

  // ==========================================
  // TÍTULO
  // ==========================================

  titulo: {
    marginLeft: 0,
    marginBottom: 30,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 22,
    color: '#16181D',
  },

  // ==========================================
  // CARD
  // ==========================================

  card: {
    width: '100%',
    minHeight: 300,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingTop: 36,
    paddingBottom: 34,
    alignItems: 'center',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 4,
  },

  // ==========================================
  // FOTO
  // ==========================================

  fotoContainer: {
    width: 105,
    height: 105,
    borderRadius: 52.5,
    overflow: 'hidden',
    marginBottom: 24,
  },

  foto: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  fotoVazia: {
    width: '100%',
    height: '100%',
    borderRadius: 52.5,
    backgroundColor: '#E6EEFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fotoInicial: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 42,
    color: '#2F6FED',
  },

  // ==========================================
  // NOME
  // ==========================================

  nome: {
    marginBottom: 10,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#16181D',
    textAlign: 'center',
  },

  // ==========================================
  // E-MAIL
  // ==========================================

  email: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
    color: '#8A909B',
    textAlign: 'center',
  },

  // ==========================================
  // BOTÃO SAIR
  // ==========================================

  botaoSair: {
    width: '100%',
    height: 46,
    marginTop: 26,
    backgroundColor: '#F44343',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },

  textoBotaoSair: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
});