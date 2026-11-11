import { Stack } from 'expo-router';
import { CarrinhoProvider } from '../context/CarrinhoContext';
import { cores } from '../constants/cores';

export default function Layout() {
  return (
    <CarrinhoProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: cores.roxo },
          headerTintColor: cores.branco,
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="cardapio" options={{ title: 'Cardápio' }} />
        <Stack.Screen name="carrinho" options={{ title: 'Carrinho' }} />
        <Stack.Screen name="pedido" options={{ title: 'Pedido' }} />
      </Stack>
    </CarrinhoProvider>
  );
}