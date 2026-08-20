import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  detalhesOs: {
    flex: 1,
    backgroundColor: '#F5F6F8',
    paddingHorizontal: 16,
  },

  titulo: {
    marginTop: 20,
    marginBottom: 16,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 19,
    color: '#16181D',
    textAlign: 'center',
  },

  scroll: {
    flex: 1,
  },

  scrollConteudo: {
    paddingBottom: 90,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 18,
    paddingHorizontal: 16,

    shadowColor: '#102818',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 2,
  },

  problema: {
    marginBottom: 4,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
    color: '#16181D',
  },

  data: {
    marginBottom: 18,
    fontFamily: 'Montserrat_400Regular',
    fontSize: 12.5,
    color: '#9AA1AC',
  },

  info: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },

  icone: {
    width: 22,
    height: 22,
    marginTop: 2,
    marginRight: 10,
    resizeMode: 'contain',
  },

  infoConteudo: {
    flex: 1,
  },

  label: {
    marginBottom: 3,
    fontFamily: 'Montserrat_400Regular',
    fontSize: 12,
    color: '#9AA1AC',
  },

  valor: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 14,
    lineHeight: 20,
    color: '#16181D',
  },

  divisor: {
    height: 1,
    backgroundColor: '#ECEEF1',
    marginVertical: 12,
  },

  subtitulo: {
    marginBottom: 8,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 15,
    color: '#16181D',
  },

  descricao: {
    marginBottom: 18,
    fontFamily: 'Montserrat_400Regular',
    fontSize: 13.5,
    lineHeight: 21,
    color: '#6B7280',
  },

  foto: {
    width: '100%',
    height: 190,
    borderRadius: 10,
    resizeMode: 'cover',
  },

  editarBtn: {
    width: '100%',
    marginTop: 16,
    marginBottom: 20,

    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#2F6FED',
    borderRadius: 10,

    paddingVertical: 13,

    alignItems: 'center',
    justifyContent: 'center',
  },

  editarTexto: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14.5,
    color: '#2F6FED',
  },
});