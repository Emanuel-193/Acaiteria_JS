import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Produto } from '../data/produtos';
import { cores } from '../constants/cores';

type Props = {
  produto: Produto;
  quantidade: number;
  onAumentar: () => void;
  onDiminuir: () => void;
  onRemover: () => void;
};

const formatar = (valor: number) => `R$ ${valor.toFixed(2).replace('.', ',')}`;

export default function ItemCarrinho({
  produto,
  quantidade,
  onAumentar,
  onDiminuir,
  onRemover,
}: Props) {
  return (
    <View style={styles.card}>
      {produto.imagem ? (
        <Image source={produto.imagem} style={styles.imagem} resizeMode="cover" />
      ) : (
        <View style={[styles.imagem, styles.placeholder]}>
          <Text style={styles.placeholderTexto}>foto</Text>
        </View>
      )}

      <View style={styles.info}>
        <Text style={styles.nome}>{produto.nome}</Text>
        <Text style={styles.unitario}>{formatar(produto.preco)} cada</Text>

        <View style={styles.stepper}>
          <TouchableOpacity
            style={styles.botaoQtd}
            onPress={onDiminuir}
            accessibilityLabel={`Diminuir ${produto.nome}`}
          >
            <Text style={styles.botaoQtdTexto}>−</Text>
          </TouchableOpacity>

          <Text style={styles.quantidade}>{quantidade}</Text>

          <TouchableOpacity
            style={styles.botaoQtd}
            onPress={onAumentar}
            accessibilityLabel={`Aumentar ${produto.nome}`}
          >
            <Text style={styles.botaoQtdTexto}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.direita}>
        <Text style={styles.subtotal}>{formatar(produto.preco * quantidade)}</Text>
        <TouchableOpacity onPress={onRemover} accessibilityLabel={`Remover ${produto.nome}`}>
          <Text style={styles.remover}>Remover</Text>
        </TouchableOpacity>
      </View>
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
  imagem: { width: 60, height: 60, borderRadius: 12 },
  placeholder: { backgroundColor: '#3B1060', alignItems: 'center', justifyContent: 'center' },
  placeholderTexto: { color: cores.lilas, fontSize: 11 },
  info: { flex: 1 },
  nome: { fontSize: 16, fontWeight: 'bold', color: cores.roxoEscuro },
  unitario: { fontSize: 12, color: '#5E4A72', marginBottom: 6 },
  stepper: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  botaoQtd: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#E2CFF5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoQtdTexto: { fontSize: 20, fontWeight: 'bold', color: cores.roxoEscuro },
  quantidade: {
    fontSize: 16,
    fontWeight: 'bold',
    color: cores.roxoEscuro,
    minWidth: 20,
    textAlign: 'center',
  },
  direita: { alignItems: 'flex-end', gap: 10 },
  subtotal: { fontSize: 16, fontWeight: 'bold', color: cores.rosaEscuro },
  remover: { fontSize: 13, color: cores.rosaEscuro, textDecorationLine: 'underline' },
});