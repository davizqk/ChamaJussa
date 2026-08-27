import React, {
  createContext,
  useContext,
  useState,
} from 'react';

const AuthContext = createContext(null);

// Único usuário autorizado
const USUARIO_AUTORIZADO = {
  email: 'lfernandooliva@icloud.com',
  senha: '123456',
  nome: 'Luis Oliva',
  foto: null,
};

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  function login(email, senha) {
    const emailNormalizado = email.trim().toLowerCase();

    if (
      emailNormalizado === USUARIO_AUTORIZADO.email &&
      senha === USUARIO_AUTORIZADO.senha
    ) {
      const usuarioLogado = {
        email: USUARIO_AUTORIZADO.email,
        nome: USUARIO_AUTORIZADO.nome,
        foto: USUARIO_AUTORIZADO.foto,
      };

      setUsuario(usuarioLogado);

      return {
        sucesso: true,
        usuario: usuarioLogado,
      };
    }

    return {
      sucesso: false,
      usuario: null,
    };
  }

  function logout() {
    setUsuario(null);
  }

  function atualizarPerfil(dados) {
    setUsuario((usuarioAtual) => {
      if (!usuarioAtual) {
        return usuarioAtual;
      }

      return {
        ...usuarioAtual,
        ...dados,
      };
    });
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        logado: !!usuario,
        login,
        logout,
        atualizarPerfil,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuth deve ser usado dentro de um AuthProvider'
    );
  }

  return context;
}