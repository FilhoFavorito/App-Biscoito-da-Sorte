import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const vetorFrases = [
  "A vida trará coisas boas se tiveres paciência.",
  "Não compense na ira o que lhe falta na razão.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Siga os bons e aprenda com eles.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "O bom-senso vai mais longe do que muito conhecimento."
];

export default function Index() {
  const [frase, setFrase] = useState("");
  function aoPressionar() {
    return setFrase(vetorFrases[Math.floor(Math.random() * (6 - 0) + 0)]);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <View style={styles.fraseContainer}>
          <Text>Frase da Sorte: {frase}</Text>
        </View>
        
        <TouchableOpacity style={styles.botao} onPress={aoPressionar}>
          <Text>Gerar Frase</Text>
        </TouchableOpacity>

      </SafeAreaView>  
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  fraseContainer:{
    alignItems: 'center',
    padding: 10,
  },
  botao:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  biscoito: {
    width:250,
    height:250
  }
});