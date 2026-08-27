import { useState } from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { useRouter } from 'expo-router';

import logoChamaJussa from '../../../assets/images/logo-chamajussa.png';

import { useAuth } from '../../contexts/AuthContext';

import styles from './LoginStyle';

export default function Login() {
  const router = useRouter();

  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit() {
    if (!email.trim() || !senha) {
      Alert.alert(
        'Campos obrigatórios',
        'Digite seu e-mail e sua senha.'
      );

      return;
    }

    const resultado = login(email, senha);

    if (!resultado.sucesso) {
      Alert.alert(
        'Acesso negado',
        'E-mail ou senha incorretos.'
      );

      return;
    }

    router.replace('/os');
  }

  return (
    <View style={styles.loginPage}>

      <View style={styles.loginPageImage}>
        <Image
          source={logoChamaJussa}
          style={styles.loginPageImageImg}
          resizeMode="contain"
        />
      </View>

      <View style={styles.loginCard}>

        <View style={styles.loginForm}>

          <Text style={styles.loginFormTitle}>
            Chama Jussa
          </Text>

          <Text style={styles.loginFormSubtitle}>
            Gerenciamento de Ordens de Serviço
          </Text>

          <View style={styles.loginFormField}>

            <Text style={styles.loginFormLabel}>
              E-mail
            </Text>

            <TextInput
              style={styles.loginFormInput}
              placeholder="email@example.com"
              placeholderTextColor="#9aa0a6"
              value={email}
              onChangeText={setEmail}
              autoComplete="username"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

          </View>

          <View style={styles.loginFormField}>

            <Text style={styles.loginFormLabel}>
              Senha
            </Text>

            <TextInput
              style={styles.loginFormInput}
              placeholder="Digite sua senha"
              placeholderTextColor="#9aa0a6"
              value={senha}
              onChangeText={setSenha}
              autoComplete="password"
              secureTextEntry
            />

          </View>

          <TouchableOpacity
            style={styles.loginFormButton}
            onPress={handleSubmit}
            activeOpacity={0.8}
          >
            <Text style={styles.loginFormButtonText}>
              Acessar o sistema
            </Text>
          </TouchableOpacity>

        </View>

      </View>

    </View>
  );
}