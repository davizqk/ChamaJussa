import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  loginPage: {
    flex: 1,
    backgroundColor: '#F5F6F8',
    alignItems: 'center',
  },

  loginPageImage: {
    width: '100%',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 56,
  },

  loginPageImageImg: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
  },

  loginCard: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4,
    elevation: 4,
  },

  loginForm: {
    padding: 20,
  },

  loginFormTitle: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 22,
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 4,
  },

  loginFormSubtitle: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 13,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
  },

  loginFormField: {
    marginBottom: 16,
  },

  loginFormLabel: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 14,
    color: '#1A1A1A',
    marginBottom: 6,
  },

  loginFormInput: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
    color: '#1A1A1A',
    backgroundColor: '#FAFAFA',
  },

  loginFormButton: {
    marginTop: 8,
    width: '100%',
    backgroundColor: '#5FC9A8',
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginFormButtonText: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 15,
    color: '#FFFFFF',
  },
});