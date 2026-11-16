import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { useCarrinho } from '../context/CarrinhoContext';
import { cores } from '../constants/cores';

const formatar = (valor: number) => `R$ ${valor.toFixed(2).replace('.', ',')}`;

export default function Pedido() {
  const { itens, total, totalItens, limpar } = useCarrinho();
  const [confirmado, setConfirmado] = useState(false);

  function voltarAoInicio() {
    limpar();
    router.replace('/');
  }

  // Abriu a tela sem nada no carrinho
  if (itens.length === 0) {
    return (
      <View style={styles.centro}>
        <Text style={styles.titulo}>Nenhum pedido por aqui</Text>
        <TouchableOpacity style={styles.botao} onPress={() => router.replace('/cardapio')}>
          <Text style={styles.botaoTexto}>Ver cardápio</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        {confirmado && (
          <View style={styles.sucesso}>
            <View style={styles.check}>
              <Text style={styles.checkTexto}>✓</Text>
            </View>
            <Text style={styles.titulo}>Pedido confirmado!</Text>
            <Text style={styles.mensagem}>Obrigado! Seu açaí já está sendo preparado.</Text>
          </View>
        )}

        <View style={styles.resumo}>
          <Text style={styles.resumoTitulo}>Resumo da compra</Text>

          {itens.map((item) => (
            <View key={item.produto.id} style={styles.linha}>
              <Text style={styles.linhaTexto}>
                {item.quantidade}x {item.produto.nome}
              </Text>
              <Text style={styles.linhaTexto}>
                {formatar(item.produto.preco * item.quantidade)}
              </Text>
            </View>
          ))}

          <View style={styles.divisor} />

          <View style={styles.linha}>
            <Text style={styles.totalTexto}>
              Total ({totalItens} {totalItens === 1 ? 'item' : 'itens'})
            </Text>
            <Text style={styles.totalTexto}>{formatar(total)}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.rodape}>
        {confirmado ? (
          <TouchableOpacity style={styles.botao} activeOpacity={0.8} onPress={voltarAoInicio}>
            <Text style={styles.botaoTexto}>Voltar ao início</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.botao}
            activeOpacity={0.8}
            onPress={() => setConfirmado(true)}
          >
            <Text style={styles.botaoTexto}>Confirmar pedido</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: cores.lilasClaro },
  conteudo: { padding: 16, gap: 16 },
  centro: {
    flex: 1,
    backgroundColor: cores.lilasClaro,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    gap: 16,
  },
  sucesso: { alignItems: 'center', gap: 10, paddingVertical: 16 },
  check: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: cores.verde,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkTexto: { color: cores.branco, fontSize: 44, fontWeight: 'bold' },
  titulo: { fontSize: 26, fontWeight: 'bold', color: cores.roxoEscuro, textAlign: 'center' },
  mensagem: { fontSize: 15, color: '#5E4A72', textAlign: 'center' },
  resumo: { backgroundColor: cores.branco, borderRadius: 16, padding: 16, gap: 10 },
  resumoTitulo: { fontSize: 17, fontWeight: 'bold', color: cores.roxoEscuro },
  linha: { flexDirection: 'row', justifyContent: 'space-between', gap: 12 },
  linhaTexto: { fontSize: 16, color: cores.texto, flexShrink: 1 },
  divisor: { height: 1, backgroundColor: '#E2CFF5' },
  totalTexto: { fontSize: 18, fontWeight: 'bold', color: cores.roxoEscuro },
  rodape: { backgroundColor: cores.branco, padding: 16 },
  botao: {
    backgroundColor: cores.roxo,
    borderRadius: 14,
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  botaoTexto: { color: cores.branco, fontSize: 17, fontWeight: 'bold' },
});