import { createContext, useContext, useState, ReactNode } from 'react';
import { Produto } from '../data/produtos';

type ItemCarrinho = { produto: Produto; quantidade: number };

type CarrinhoContextType = {
  itens: ItemCarrinho[];
  adicionar: (produto: Produto) => void;
  remover: (id: number) => void;
  alterarQuantidade: (id: number, delta: number) => void;
  limpar: () => void;
  total: number;
  totalItens: number;
};

const CarrinhoContext = createContext({} as CarrinhoContextType);

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);

  function adicionar(produto: Produto) {
    setItens((atual) => {
      const existe = atual.find((i) => i.produto.id === produto.id);
      if (existe) {
        return atual.map((i) =>
          i.produto.id === produto.id ? { ...i, quantidade: i.quantidade + 1 } : i
        );
      }
      return [...atual, { produto, quantidade: 1 }];
    });
  }

  function remover(id: number) {
    setItens((atual) => atual.filter((i) => i.produto.id !== id));
  }

  function alterarQuantidade(id: number, delta: number) {
    setItens((atual) =>
      atual
        .map((i) => (i.produto.id === id ? { ...i, quantidade: i.quantidade + delta } : i))
        .filter((i) => i.quantidade > 0)
    );
  }

  function limpar() {
    setItens([]);
  }

  const total = itens.reduce((soma, i) => soma + i.produto.preco * i.quantidade, 0);
  const totalItens = itens.reduce((soma, i) => soma + i.quantidade, 0);

  return (
    <CarrinhoContext.Provider
      value={{ itens, adicionar, remover, alterarQuantidade, limpar, total, totalItens }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCarrinho = () => useContext(CarrinhoContext);