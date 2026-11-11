export type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem?: any; // troque por require('../../assets/images/xxx.png')
};

export const produtos: Produto[] = [
  { id: 1, nome: 'Açaí', descricao: 'Creme de açaí puro, geladinho e cremoso.', preco: 9 },
  { id: 2, nome: 'Açaí com ninho', descricao: 'Creme de açaí com leite ninho.', preco: 10 },
  { id: 3, nome: 'Açaí com morango', descricao: 'Creme de açaí com pedaços de morango.', preco: 10 },
  { id: 4, nome: 'Açaí com maracujá', descricao: 'Creme de açaí com o azedinho do maracujá.', preco: 10 },
  { id: 5, nome: 'Ninho com morango', descricao: 'Creme de ninho com morango.', preco: 12 },
  { id: 6, nome: 'Maracujá', descricao: 'Creme de maracujá refrescante.', preco: 12 },
  { id: 7, nome: 'Morango', descricao: 'Creme de morango cremoso.', preco: 12 },
];