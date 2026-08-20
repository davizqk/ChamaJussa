import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  perfil: {
    flex: 1,
    backgroundColor: '#F5F6F8',
    paddingHorizontal: 16,
  },

  perfilTitulo: {
    marginTop: 24,
    marginBottom: 16,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 20,
    color: '#16181D',
  },

  perfilCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 40,
    paddingHorizontal: 16,
    minHeight: 260,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#102818',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 2,
  },

  perfilFoto: {
    width: 104,
    height: 104,
    borderRadius: 52,
    resizeMode: 'cover',
    backgroundColor: '#ECEEF1',
    marginBottom: 18,
  },

  perfilNome: {
    marginBottom: 4,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 17,
    color: '#16181D',
  },

  perfilEmail: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 13.5,
    color: '#9AA1AC',
  },

  perfilSairBtn: {
    width: '100%',
    marginTop: 20,
    backgroundColor: '#E5484D',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#E5484D',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 3,
  },

  perfilSairBtnTexto: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14.5,
    color: '#FFFFFF',
  },
});