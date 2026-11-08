import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.greeting}>
          Olá! 👋
        </Text>

        <Text style={styles.title}>
          O que deseja comer hoje?
        </Text>
      </View>

      <View style={styles.banner}>
        <Text style={styles.offer}>
          OFERTA ESPECIAL
        </Text>

        <Text style={styles.bannerTitle}>
          Hambúrguer + Bebida
        </Text>

        <Text style={styles.bannerText}>
          Uma combinação perfeita para seu pedido.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Peça agora
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>
        Categorias
      </Text>

      <View style={styles.categories}>

        <TouchableOpacity style={styles.category}>
          <Text style={styles.emoji}>🍔</Text>
          <Text>Burger</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category}>
          <Text style={styles.emoji}>🍕</Text>
          <Text>Pizza</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category}>
          <Text style={styles.emoji}>🥤</Text>
          <Text>Bebidas</Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 50,
    marginBottom: 25,
  },

  greeting: {
    fontSize: 16,
    color: "#666666",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 5,
  },

  banner: {
    backgroundColor: "#FE8C00",
    borderRadius: 20,
    padding: 25,
  },

  offer: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "bold",
  },

  bannerTitle: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 8,
  },

  bannerText: {
    color: "#ffffff",
    fontSize: 15,
    marginTop: 8,
  },

  button: {
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "flex-start",
  },

  buttonText: {
    color: "#FE8C00",
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 15,
  },

  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  category: {
    width: "30%",
    backgroundColor: "#FFF3E6",
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: "center",
  },

  emoji: {
    fontSize: 30,
    marginBottom: 5,
  },

});