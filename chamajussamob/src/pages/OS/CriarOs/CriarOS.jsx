import { useState, useEffect } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import {
  useRouter,
  useLocalSearchParams,
} from 'expo-router';

import Footer from '../../../components/Footer/Footer';

import { useOS } from '../../../contexts/OSContext';
import { useAuth } from '../../../contexts/AuthContext';

import styles from './CriarOSStyle';

const STATUS_OPTIONS = [
  {
    key: 'aberta',
    label: 'Aberta',
  },
  {
    key: 'andamento',
    label: 'Em andamento',
  },
  {
    key: 'concluida',
    label: 'Concluída',
  },
];

export default function CriarOS() {
  const router = useRouter();

  const params = useLocalSearchParams();

  const {
    criarOS,
    editarOS,
    getOSPorId,
  } = useOS();

  const { usuario } = useAuth();

  const editMode = params.editar === 'true';
  const id = params.id;

  const [form, setForm] = useState({
    titulo: '',
    maquina: '',
    local: '',
    descricao: '',
    imagem: null,
    status: 'aberta',
  });

  // ==========================================
  // CARREGAR OS PARA EDIÇÃO
  // ==========================================

  useEffect(() => {
    if (!editMode || !id) {
      return;
    }

    const os = getOSPorId(id);

    if (!os) {
      Alert.alert(
        'Erro',
        'Ordem de serviço não encontrada.',
        [
          {
            text: 'OK',
            onPress: () => router.replace('/os'),
          },
        ]
      );

      return;
    }

    setForm({
      titulo: os.titulo || '',
      maquina: os.maquina || '',
      local: os.local || '',
      descricao: os.descricao || '',
      imagem: os.imagem || null,
      status: os.status || 'aberta',
    });
  }, [editMode, id]);

  // ==========================================
  // ALTERAR CAMPO
  // ==========================================

  function handleChange(campo, valor) {
    setForm((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  }

  // ==========================================
  // SELECIONAR IMAGEM
  // ==========================================

  async function selecionarImagem() {
    try {
      const permissao =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permissao.granted) {
        Alert.alert(
          'Permissão necessária',
          'Permita o acesso às fotos para selecionar uma imagem.'
        );

        return;
      }

      const resultado =
        await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images'],
          allowsEditing: true,
          aspect: [4, 3],
          quality: 0.8,
        });

      if (resultado.canceled) {
        return;
      }

      const imagemSelecionada =
        resultado.assets[0];

      handleChange('imagem', {
        uri: imagemSelecionada.uri,

        fileName:
          imagemSelecionada.fileName ||
          'Imagem selecionada',
      });

    } catch (error) {
      console.log(
        'Erro ao selecionar imagem:',
        error
      );

      Alert.alert(
        'Erro',
        'Não foi possível selecionar a imagem.'
      );
    }
  }

  // ==========================================
  // VALIDAR CAMPOS
  // ==========================================

  function validarCampos() {
    if (!form.titulo.trim()) {
      Alert.alert(
        'Campo obrigatório',
        'Informe o título do problema.'
      );

      return false;
    }

    if (!form.maquina.trim()) {
      Alert.alert(
        'Campo obrigatório',
        'Informe a máquina/equipamento.'
      );

      return false;
    }

    if (!form.local.trim()) {
      Alert.alert(
        'Campo obrigatório',
        'Informe o local/setor.'
      );

      return false;
    }

    if (!form.descricao.trim()) {
      Alert.alert(
        'Campo obrigatório',
        'Informe a descrição do problema.'
      );

      return false;
    }

    if (!form.imagem?.uri) {
      Alert.alert(
        'Campo obrigatório',
        'Selecione uma imagem do problema.'
      );

      return false;
    }

    return true;
  }

  // ==========================================
  // CRIAR OS
  // ==========================================

  function handleSubmit() {
    if (!validarCampos()) {
      return;
    }

    criarOS({
      titulo: form.titulo.trim(),

      maquina: form.maquina.trim(),

      local: form.local.trim(),

      descricao: form.descricao.trim(),

      imagem: {
        uri: form.imagem.uri,
        fileName:
          form.imagem.fileName ||
          'Imagem selecionada',
      },

      status: 'aberta',

      solicitante:
        usuario?.nome ||
        'Usuário não identificado',

      fotoSolicitante:
        usuario?.foto ||
        null,
    });

    // Vai automaticamente para Minhas OS
    router.replace('/os');
  }

  // ==========================================
  // SALVAR EDIÇÃO
  // ==========================================

function handleSalvarEdicao() {
  if (!validarCampos()) {
    return;
  }

  editarOS(id, {
    titulo: form.titulo.trim(),

    maquina: form.maquina.trim(),

    local: form.local.trim(),

    descricao: form.descricao.trim(),

    imagem: {
      uri: form.imagem.uri,
      fileName:
        form.imagem.fileName ||
        'Imagem selecionada',
    },

    status: form.status,

    solicitante:
      usuario?.nome ||
      'Usuário não identificado',

    fotoSolicitante:
      usuario?.foto ||
      null,
  });

  // Volta automaticamente para Minhas OS
  router.replace('/os');
}

  // ==========================================
  // CANCELAR EDIÇÃO
  // ==========================================

  function handleCancelarEdicao() {
    router.back();
  }

  return (
    <View style={styles.criarOs}>

      <Text style={styles.titulo}>
        {editMode
          ? 'Editar ordem de serviço'
          : 'Criar ordem de serviço'}
      </Text>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      >

        <View style={styles.card}>

          {/* TÍTULO */}

          <Text style={styles.label}>
            Título do problema *
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Ex: Vazamento da pia"
            placeholderTextColor="#9AA1AC"
            value={form.titulo}
            onChangeText={(valor) =>
              handleChange('titulo', valor)
            }
          />

          {/* MÁQUINA */}

          <Text style={styles.label}>
            Máquina / Equipamento *
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Ex: Pia do banheiro"
            placeholderTextColor="#9AA1AC"
            value={form.maquina}
            onChangeText={(valor) =>
              handleChange('maquina', valor)
            }
          />

          {/* LOCAL */}

          <Text style={styles.label}>
            Local / Setor *
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Ex: Banheiro masculino"
            placeholderTextColor="#9AA1AC"
            value={form.local}
            onChangeText={(valor) =>
              handleChange('local', valor)
            }
          />

          {/* DESCRIÇÃO */}

          <Text style={styles.label}>
            Descrição do problema *
          </Text>

          <TextInput
            style={styles.textarea}
            placeholder="Descreva o problema"
            placeholderTextColor="#9AA1AC"
            value={form.descricao}
            onChangeText={(valor) =>
              handleChange('descricao', valor)
            }
            multiline
            textAlignVertical="top"
          />

          {/* IMAGEM */}

          <Text style={styles.label}>
            Imagem / Foto do problema *
          </Text>

          <TouchableOpacity
            style={styles.inputImagem}
            onPress={selecionarImagem}
            activeOpacity={0.7}
          >
            {form.imagem?.uri ? (
              <View style={styles.imagemSelecionada}>

                <Image
                  source={{
                    uri: form.imagem.uri,
                  }}
                  style={styles.previewImagem}
                />

                <Text style={styles.nomeImagem}>
                  {form.imagem.fileName ||
                    'Imagem selecionada'}
                </Text>

              </View>
            ) : (
              <Text style={styles.placeholderImagem}>
                Insira a Imagem
              </Text>
            )}
          </TouchableOpacity>

          {/* STATUS NA EDIÇÃO */}

          {editMode && (
            <>
              <Text style={styles.label}>
                Status da OS *
              </Text>

              <View style={styles.statusContainer}>

                {STATUS_OPTIONS.map((opcao) => {
                  const selecionado =
                    form.status === opcao.key;

                  return (
                    <TouchableOpacity
                      key={opcao.key}
                      style={[
                        styles.statusBotao,
                        selecionado &&
                          styles.statusBotaoSelecionado,
                      ]}
                      onPress={() =>
                        handleChange(
                          'status',
                          opcao.key
                        )
                      }
                      activeOpacity={0.8}
                    >
                      <Text
                        style={[
                          styles.statusBotaoTexto,
                          selecionado &&
                            styles.statusBotaoTextoSelecionado,
                        ]}
                      >
                        {opcao.label}
                      </Text>
                    </TouchableOpacity>
                  );
                })}

              </View>
            </>
          )}

          {/* BOTÕES */}

          {editMode ? (
            <>
              <TouchableOpacity
                style={styles.botao}
                onPress={handleSalvarEdicao}
                activeOpacity={0.8}
              >
                <Text style={styles.textoBotao}>
                  Salvar Edição
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.botaoCancelar}
                onPress={handleCancelarEdicao}
                activeOpacity={0.8}
              >
                <Text style={styles.textoBotaoCancelar}>
                  Cancelar Edição
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={styles.botao}
              onPress={handleSubmit}
              activeOpacity={0.8}
            >
              <Text style={styles.textoBotao}>
                Abrir Ordem de Serviço
              </Text>
            </TouchableOpacity>
          )}

        </View>
      </ScrollView>

      <Footer />

    </View>
  );
}