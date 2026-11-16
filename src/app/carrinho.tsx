import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import ItemCarrinho from '../components/ItemCarrinho';
import { useCarrinho } from '../context/CarrinhoContext';
import { cores } from '../constants/cores';

const formatar = (valor: number) => `R$ ${valor.toFixed(2).replace('.', ',')}`;

export default function Carrinho() {
  const { itens, alterarQuantidade, remover, total, totalItens } = useCarrinho();

  // Carrinho vazio
  if (itens.length === 0) {
    return (
      <View style={styles.vazioContainer}>
        <Text style={styles.vazioTitulo}>Seu carrinho está vazio</Text>
        <Text style={styles.vazioTexto}>Que tal escolher um açaí?</Text>
        <TouchableOpacity style={styles.botao} onPress={() => router.push('/cardapio')}>
          <Text style={styles.botaoTexto}>Ver cardápio</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={itens}
        keyExtractor={(item) => String(item.produto.id)}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <ItemCarrinho
            produto={item.produto}
            quantidade={item.quantidade}
            onAumentar={() => alterarQuantidade(item.produto.id, 1)}
            onDiminuir={() => alterarQuantidade(item.produto.id, -1)}
            onRemover={() => remover(item.produto.id)}
          />
        )}
      />

      <View style={styles.rodape}>
        <View style={styles.linha}>
          <Text style={styles.rotulo}>
            {totalItens} {totalItens === 1 ? 'item' : 'itens'}
          </Text>
          <Text style={styles.rotulo}>{formatar(total)}</Text>
        </View>
        <View style={styles.linha}>
          <Text style={styles.totalTexto}>Total</Text>
          <Text style={styles.totalTexto}>{formatar(total)}</Text>
        </View>

        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.8}
          onPress={() => router.push('/pedido')}
        >
          <Text style={styles.botaoTexto}>Finalizar pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: cores.lilasClaro },
  lista: { padding: 16 },
  rodape: { backgroundColor: cores.branco, padding: 16, gap: 10 },
  linha: { flexDirection: 'row', justifyContent: 'space-between' },
  rotulo: { fontSize: 16, color: cores.texto },
  totalTexto: { fontSize: 20, fontWeight: 'bold', color: cores.roxoEscuro },
  botao: {
    backgroundColor: cores.roxo,
    borderRadius: 14,
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  botaoTexto: { color: cores.branco, fontSize: 17, fontWeight: 'bold' },
  vazioContainer: {
    flex: 1,
    backgroundColor: cores.lilasClaro,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    gap: 12,
  },
  vazioTitulo: { fontSize: 22, fontWeight: 'bold', color: cores.roxoEscuro },
  vazioTexto: { fontSize: 16, color: '#5E4A72', marginBottom: 8 },
});