import { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import ProdutoCard from '../components/ProdutoCard';
import { produtos } from '../data/produtos';
import { useCarrinho } from '../context/CarrinhoContext';
import { cores } from '../constants/cores';

// Remove acentos e deixa minúsculo: "Açaí" vira "acai"
const normalizar = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export default function Cardapio() {
  const [busca, setBusca] = useState('');
  const { adicionar, total, totalItens } = useCarrinho();

  const resultados = produtos.filter((p) =>
    normalizar(p.nome).includes(normalizar(busca))
  );

  return (
    <View style={styles.container}>
      <View style={styles.busca}>
        <Ionicons name="search" size={20} color="#5E4A72" />
        <TextInput
          style={styles.input}
          placeholder="Buscar açaí pelo nome"
          placeholderTextColor="#5E4A72"
          value={busca}
          onChangeText={setBusca}
        />
      </View>

      <FlatList
        data={resultados}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ProdutoCard produto={item} onAdicionar={adicionar} />}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhum açaí encontrado.</Text>}
      />

      {totalItens > 0 && (
        <TouchableOpacity
          style={styles.barra}
          activeOpacity={0.8}
          onPress={() => router.push('/carrinho')}
        >
          <Text style={styles.barraTexto}>
            Ver carrinho • {totalItens} {totalItens === 1 ? 'item' : 'itens'} • R${' '}
            {total.toFixed(2).replace('.', ',')}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: cores.lilasClaro },
  busca: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: cores.branco,
    borderRadius: 14,
    margin: 16,
    marginBottom: 8,
    paddingHorizontal: 14,
    minHeight: 48,
    gap: 10,
  },
  input: { flex: 1, fontSize: 15, color: cores.texto },
  lista: { padding: 16, paddingTop: 8 },
  vazio: { textAlign: 'center', color: '#5E4A72', marginTop: 32, fontSize: 16 },
  barra: {
    backgroundColor: cores.roxo,
    margin: 16,
    borderRadius: 14,
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  barraTexto: { color: cores.branco, fontSize: 17, fontWeight: 'bold' },
});