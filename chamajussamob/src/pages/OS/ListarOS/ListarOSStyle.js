import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  listaOs: {
    flex: 1,
    backgroundColor: '#F5F6F8',
    paddingHorizontal: 16,
  },

  listaOsScroll: {
    paddingBottom: 90,
  },

  listaOsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    marginTop: 20,
    marginBottom: 18,
  },

  listaOsSaudacao: {
    marginBottom: 2,

    fontFamily: 'Montserrat_400Regular',
    fontSize: 13,
    color: '#8A909B',
  },

  listaOsTitulo: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 20,
    color: '#16181D',
  },

  listaOsNovaBtn: {
    backgroundColor: '#2F6FED',

    borderRadius: 8,

    paddingVertical: 9,
    paddingHorizontal: 16,
  },

  listaOsNovaBtnTexto: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 13,
    color: '#FFFFFF',
  },

  listaOsFiltros: {
    width: '100%',
    marginBottom: 18,
  },

  listaOsFiltrosLinha: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 8,

    marginBottom: 8,
  },

  listaOsFiltro: {
    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#E3E5E9',

    borderRadius: 20,

    paddingVertical: 7,
    paddingHorizontal: 14,
  },

  listaOsFiltroAtivo: {
    backgroundColor: '#2F6FED',
    borderColor: '#2F6FED',
  },

  listaOsFiltroText: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 12.5,
    color: '#6B7280',
  },

  listaOsFiltroTextAtivo: {
    color: '#FFFFFF',
  },

  listaOsLista: {
    gap: 12,
  },

  osCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 12,

    paddingVertical: 14,
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

  osCardTopo: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 8,
  },

  osCardId: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14,
    color: '#2F6FED',
  },

  osCardStatus: {
    paddingVertical: 4,
    paddingHorizontal: 10,

    borderRadius: 20,
  },

  osCardStatusAberta: {
    backgroundColor: '#E6EEFF',
  },

  osCardStatusAndamento: {
    backgroundColor: '#FFF4E0',
  },

  osCardStatusConcluida: {
    backgroundColor: '#E5F7EC',
  },

  osCardStatusTexto: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 11.5,
  },

  osCardStatusTextoAberta: {
    color: '#2F6FED',
  },

  osCardStatusTextoAndamento: {
    color: '#C88A1E',
  },

  osCardStatusTextoConcluida: {
    color: '#1FA758',
  },

  osCardTitulo: {
    marginBottom: 6,

    fontFamily: 'Montserrat_700Bold',
    fontSize: 14.5,
    color: '#16181D',
  },

  osCardDescricao: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 13,
    lineHeight: 19,
    color: '#8A909B',
  },

});