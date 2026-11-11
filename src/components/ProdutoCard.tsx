import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Produto } from '../data/produtos';
import { cores } from '../constants/cores';

type Props = {
  produto: Produto;
  onAdicionar: (produto: Produto) => void;
};

export default function ProdutoCard({ produto, onAdicionar }: Props) {
  return (
    <View style={styles.card}>
      {produto.imagem ? (
        <Image source={produto.imagem} style={styles.imagem} />
      ) : (
        <View style={[styles.imagem, styles.placeholder]}>
          <Text style={styles.placeholderTexto}>foto</Text>
        </View>
      )}

      <View style={styles.info}>
        <Text style={styles.nome}>{produto.nome}</Text>
        <Text style={styles.descricao}>{produto.descricao}</Text>
        <Text style={styles.preco}>R$ {produto.preco.toFixed(2).replace('.', ',')}</Text>
      </View>

      <TouchableOpacity
        style={styles.botao}
        activeOpacity={0.8}
        onPress={() => onAdicionar(produto)}
        accessibilityLabel={`Adicionar ${produto.nome}`}
      >
        <Ionicons name="add" size={24} color={cores.branco} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: cores.branco,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    gap: 12,
  },
  imagem: { width: 76, height: 76, borderRadius: 14 },
  placeholder: { backgroundColor: '#3B1060', alignItems: 'center', justifyContent: 'center' },
  placeholderTexto: { color: cores.lilas, fontSize: 12 },
  info: { flex: 1 },
  nome: { fontSize: 17, fontWeight: 'bold', color: cores.roxoEscuro },
  descricao: { fontSize: 13, color: '#5E4A72', marginVertical: 2 },
  preco: { fontSize: 16, fontWeight: 'bold', color: cores.rosaEscuro },
  botao: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: cores.roxo,
    alignItems: 'center',
    justifyContent: 'center',
  },
});