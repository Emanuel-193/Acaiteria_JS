import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { cores } from '../constants/cores';

export default function Inicio() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Logo (provisória) */}
      <View style={styles.logo}>
        <Text style={styles.logoTexto}>LOGO</Text>
      </View>

      <Text style={styles.titulo}>Sua Açaiteria</Text>
      <Text style={styles.boasVindas}>
        Bem-vindo! Monte seu açaí do jeito que você gosta.
      </Text>

      {/* Imagem principal (provisória) */}
      <View style={styles.destaque}>
        <Text style={styles.destaqueTexto}>foto do açaí</Text>
      </View>

      <TouchableOpacity
        style={styles.botao}
        activeOpacity={0.8}
        onPress={() => router.push('/cardapio')}
      >
        <Text style={styles.botaoTexto}>Ver cardápio</Text>
      </TouchableOpacity>

      <Text style={styles.rodape}>Delivery • [seu horário]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.roxoEscuro,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    gap: 20,
  },
  logo: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: cores.lilas,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoTexto: { color: cores.roxoEscuro, fontWeight: 'bold' },
  titulo: { fontSize: 40, fontWeight: 'bold', color: cores.branco },
  boasVindas: {
    fontSize: 17,
    color: cores.lilas,
    textAlign: 'center',
    maxWidth: 280,
  },
  destaque: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#3B1060',
    alignItems: 'center',
    justifyContent: 'center',
  },
  destaqueTexto: { color: cores.lilas },
  botao: {
    backgroundColor: cores.lilas,
    paddingVertical: 16,
    borderRadius: 14,
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
  },
  botaoTexto: { color: cores.roxoEscuro, fontSize: 17, fontWeight: 'bold' },
  rodape: { color: cores.lilas, fontSize: 13 },
});