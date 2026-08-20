import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import Footer from '../../../components/Footer/Footer';
import styles from './CriarOSStyle';

export default function CriarOS() {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    titulo: '',
    maquina: '',
    local: '',
    descricao: '',
    imagem: null,
  });

  function handleChange(campo, valor) {
    setForm((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  }

  async function selecionarImagem() {
    const resultado =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        quality: 1,
      });

    if (!resultado.canceled) {
      handleChange(
        'imagem',
        resultado.assets[0]
      );
    }
  }

  function handleSubmit() {
    if (
      !form.titulo ||
      !form.maquina ||
      !form.local ||
      !form.descricao ||
      !form.imagem
    ) {
      Alert.alert(
        'Campos obrigatórios',
        'Preencha todos os campos antes de abrir a Ordem de Serviço.'
      );
      return;
    }
    console.log('Nova OS:', form);
    Alert.alert(
      'Sucesso',
      'Ordem de Serviço criada com sucesso!',
      [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('ListarOS');
          },
        },
      ]
    );
  }

  return (
    <View style={styles.criarOs}>
      <Text style={styles.titulo}>
        Criar ordem de serviço
      </Text>
      <View style={styles.card}>
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
        <Text style={styles.label}>
          Imagem / Foto do problema *
        </Text>
        <TouchableOpacity
          style={styles.inputImagem}
          onPress={selecionarImagem}
          activeOpacity={0.7}
        >
          {form.imagem ? (
            <View style={styles.imagemSelecionada}>
              <Image
                source={{ uri: form.imagem.uri }}
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
        <TouchableOpacity
          style={styles.botao}
          onPress={handleSubmit}
          activeOpacity={0.8}
        >
          <Text style={styles.textoBotao}>
            Abrir Ordem de Serviço
          </Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
}