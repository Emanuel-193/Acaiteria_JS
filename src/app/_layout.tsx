import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="cardapio" options={{ title: 'Cardápio' }} />
      <Stack.Screen name="carrinho" options={{ title: 'Carrinho' }} />
      <Stack.Screen name="pedido" options={{ title: 'Pedido' }} />
    </Stack>
  );
}

