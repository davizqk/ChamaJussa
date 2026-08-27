import React, {
  createContext,
  useContext,
  useState,
} from 'react';

import { useAuth } from './AuthContext';

const OSContext = createContext(null);

export function OSProvider({ children }) {
  const [ordens, setOrdens] = useState([]);

  const { usuario } = useAuth();

  // ==========================================================
  // CRIAR OS
  // ==========================================================

  function criarOS(novaOS) {
    const osComId = {
      ...novaOS,

      id: Date.now().toString(),

      status: novaOS.status || 'aberta',

      solicitante:
        usuario?.nome ||
        novaOS.solicitante ||
        'Usuário não identificado',

      fotoSolicitante:
        usuario?.foto ||
        novaOS.fotoSolicitante ||
        null,

      criadaEm: new Date().toLocaleString('pt-BR'),

      imagem: novaOS.imagem || null,
    };

    setOrdens((prev) => [
      ...prev,
      osComId,
    ]);

    return osComId;
  }

  // ==========================================================
  // EDITAR OS
  // ==========================================================

  function editarOS(id, dadosAtualizados) {
    const idComparacao = String(id);

    setOrdens((prev) =>
      prev.map((os) => {
        if (String(os.id) !== idComparacao) {
          return os;
        }

        return {
          ...os,
          ...dadosAtualizados,

          id: os.id,

          solicitante:
            usuario?.nome ||
            dadosAtualizados.solicitante ||
            os.solicitante,

          fotoSolicitante:
            usuario?.foto ||
            dadosAtualizados.fotoSolicitante ||
            os.fotoSolicitante,

          imagem:
            dadosAtualizados.imagem ||
            os.imagem ||
            null,
        };
      })
    );
  }

  // ==========================================================
  // EXCLUIR OS
  // ==========================================================

  function deletarOS(id) {
    const idParaExcluir = String(id);

    console.log('================================');
    console.log('EXCLUSÃO SOLICITADA');
    console.log('ID recebido:', idParaExcluir);

    setOrdens((prev) => {
      console.log(
        'Ordens antes:',
        prev.map((os) => String(os.id))
      );

      const novasOrdens = prev.filter(
        (os) => String(os.id) !== idParaExcluir
      );

      console.log(
        'Ordens depois:',
        novasOrdens.map((os) => String(os.id))
      );

      return novasOrdens;
    });

    console.log('================================');
  }

  // ==========================================================
  // BUSCAR OS POR ID
  // ==========================================================

  function getOSPorId(id) {
    const idBusca = String(id);

    return ordens.find(
      (os) => String(os.id) === idBusca
    );
  }

  return (
    <OSContext.Provider
      value={{
        ordens,
        criarOS,
        editarOS,
        deletarOS,
        getOSPorId,
      }}
    >
      {children}
    </OSContext.Provider>
  );
}

// ==========================================================
// HOOK
// ==========================================================

export function useOS() {
  const context = useContext(OSContext);

  if (!context) {
    throw new Error(
      'useOS deve ser usado dentro de um OSProvider'
    );
  }

  return context;
}