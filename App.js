import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";

export default function App() {
  const [gasolina, setGasolina] = useState();
  const [alcool, setAlcool] = useState();
  const [gasolVant, setGasolVant] = useState(false);
  const [alcoolVant, setAlcoolVant] = useState(false);
  const [text, setText] = useState("");

  function calcularEconomia() {
    if (gasolina < alcool) {
      setGasolVant(true);
      setAlcoolVant(false);
      setText("Gasolina está mais em conta!");
    } else {
      setAlcoolVant(true);
      setGasolVant(false);
      setText("Álcool está mais em conta!");
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textTop}>Economize Mais!</Text>
      <Text style={styles.text}>Digite os valores dos combustiveis</Text>
      <StatusBar style="auto" />
      <TextInput
        placeholder="Digite o valor da gasolina"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setGasolina}
        value={gasolina}
      />
      <TextInput
        placeholder="Digite o valor do álcool"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setAlcool}
        value={alcool}
      />
      <Button
        onPress={() => {
          calcularEconomia();
          setAlcool("");
          setGasolina("");
        
        }}
        title="Calcule"
        color="#28a745"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text style={styles.text}>{text}</Text>

      <View>
        {gasolVant || alcoolVant != false ?
          gasolVant?(
            <Image
              style={styles.image}
              source={require("./images/gasolina.png")}
            />
          ) :  
            <Image style={styles.image} source={require("./images/alcool.png")} />
          :null
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17a2b8",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    
  },
  input: {
    backgroundColor: "#f8f9fa",
    textAlign: "center",
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    marginTop: 15,
    width: 200,
    height: 200,
  },
  textTop: {
    marginBottom: 20,
    fontSize: 40,
    backgroundColor: "#28a745",
    borderRadius: 15,
    padding: 20,
    color: "#f8f9fa"
  },
  text: {
    fontSize: 17,
    color: "#f8f9fa"
  },
  textResult: {
    marginTop: 20,
  }
});
