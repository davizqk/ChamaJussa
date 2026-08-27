import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  detalhesOs: {
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

  scroll: {
    flex: 1,
  },

  scrollConteudo: {
    paddingBottom: 110,
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

  // ==========================================
  // PROBLEMA
  // ==========================================

  problema: {
    marginBottom: 8,
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

  // ==========================================
  // STATUS
  // ==========================================

  statusContainer: {
    alignSelf: 'flex-start',
    marginBottom: 16,
  },

  statusLabel: {
    marginBottom: 5,
    fontFamily: 'Montserrat_400Regular',
    fontSize: 12,
    color: '#9AA1AC',
  },

  statusValor: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    overflow: 'hidden',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 12,
  },

  statusAberta: {
    backgroundColor: '#E8F5E9',
    color: '#2E7D32',
  },

  statusAndamento: {
    backgroundColor: '#FFF4D6',
    color: '#D68900',
  },

  statusConcluida: {
    backgroundColor: '#E3F2FD',
    color: '#1565C0',
  },

  // ==========================================
  // INFORMAÇÕES
  // ==========================================

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

  // ==========================================
  // DESCRIÇÃO
  // ==========================================

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

  // ==========================================
  // FOTO
  // ==========================================

  fotoContainer: {
    width: '100%',
    marginTop: 4,
    marginBottom: 4,
  },

  fotoTitulo: {
    marginBottom: 10,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14,
    color: '#16181D',
  },

  foto: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    backgroundColor: '#F0F1F3',
  },

  semFoto: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 10,
    backgroundColor: '#F5F6F8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  semFotoTexto: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 12,
    color: '#9AA1AC',
    textAlign: 'center',
  },

  // ==========================================
  // BOTÃO EDITAR
  // ==========================================

  editarBtn: {
    width: '100%',
    marginTop: 16,
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

  // ==========================================
  // BOTÃO EXCLUIR
  // ==========================================

  excluirBtn: {
    width: '100%',
    marginTop: 12,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#E5484D',
    borderRadius: 10,
    paddingVertical: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },

  excluirTexto: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14.5,
    color: '#E5484D',
  },

  // ==========================================
  // OS NÃO ENCONTRADA
  // ==========================================

  osNaoEncontrada: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  osNaoEncontradaTitulo: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 22,
    color: '#16181D',
    marginBottom: 10,
    textAlign: 'center',
  },

  osNaoEncontradaTexto: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
    lineHeight: 21,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
  },

  voltarBtn: {
    backgroundColor: '#2F6FED',
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 20,
  },

  voltarTexto: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14,
    color: '#FFFFFF',
  },

});