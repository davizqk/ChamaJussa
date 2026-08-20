import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  criarOs: {
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

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 22,
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

  label: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 13.5,
    color: '#16181D',
    marginBottom: 8,
  },

  input: {
    width: '100%',
    backgroundColor: '#F1F2F4',
    borderRadius: 8,

    paddingVertical: 12,
    paddingHorizontal: 14,

    fontFamily: 'Montserrat_400Regular',
    fontSize: 13.5,
    color: '#16181D',

    marginBottom: 18,
  },

  textarea: {
    width: '100%',
    minHeight: 90,

    backgroundColor: '#F1F2F4',
    borderRadius: 8,

    paddingVertical: 12,
    paddingHorizontal: 14,

    fontFamily: 'Montserrat_400Regular',
    fontSize: 13.5,
    color: '#16181D',

    marginBottom: 18,

    textAlignVertical: 'top',
  },

  inputImagem: {
    width: '100%',
    backgroundColor: '#F1F2F4',
    borderRadius: 8,

    paddingVertical: 12,
    paddingHorizontal: 14,

    marginBottom: 18,
  },

  imagemSelecionada: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  previewImagem: {
    width: 55,
    height: 55,
    borderRadius: 8,
    marginRight: 10,
  },

  nomeImagem: {
    flex: 1,
    fontFamily: 'Montserrat_400Regular',
    fontSize: 13,
    color: '#16181D',
  },

  placeholderImagem: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 13.5,
    color: '#9AA1AC',
  },

  botao: {
    width: '100%',
    marginTop: 6,

    backgroundColor: '#1DA57A',
    borderRadius: 10,

    paddingVertical: 15,

    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#1DA57A',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 4,
  },

  textoBotao: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14.5,
    color: '#FFFFFF',
  },
});