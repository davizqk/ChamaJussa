import { Stack, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { AuthProvider, useAuth } from '../src/contexts/AuthContext';
import { OSProvider } from '../src/contexts/OSContext';

function PrivateRoute() {
  const { logado } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (segments.length === 0) {
      return;
    }

    const primeiraRota = segments[0];

    // A rota "/" é o login
    const estaNoLogin = primeiraRota === undefined || primeiraRota === 'index';

    // Não está logado e tentou acessar outra tela
    if (!logado && !estaNoLogin) {
      router.replace('/');
      return;
    }

    // Está logado e está tentando acessar o login
    if (logado && estaNoLogin) {
      router.replace('/os');
    }
  }, [logado, segments]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="os/index" />
      <Stack.Screen name="os/criar" />
      <Stack.Screen name="os/[id]" />
      <Stack.Screen name="notificacoes" />
      <Stack.Screen name="perfil" />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <OSProvider>
        <PrivateRoute />
      </OSProvider>
    </AuthProvider>
  );
}