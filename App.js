import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, TextInput, Button, Image } from "react-native";
import styles from "./Style/Style";

export default function App() {
  const [gasolina, setGasolina] = useState("");
  const [Etanol, setEtanol] = useState("");
  const [text, setText] = useState("");

  function calcularEconomia() {
    const gasolFloat = parseFloat(gasolina);
    const etanolFloat = parseFloat(Etanol);
    if (!isNaN(gasolFloat) && !isNaN(etanolFloat)) {
      const combustVant = etanolFloat <= gasolFloat * 0.7;
      setText(
        combustVant ? "Etanol é mais vantajoso!" : "Gasolina é mais vantajosa!"
      );
    } else {
      setText("Valores inválidos");
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
        placeholder="Digite o valor do Etanol"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setEtanol}
        value={Etanol}
      />
      <Button
        onPress={() => {
          calcularEconomia();
          setEtanol("");
          setGasolina("");
        }}
        title="Calcule"
        color="#28a745"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text style={styles.textResult}>{text}</Text>
      <View>
        {text ? (
          <View style={styles.sectionImg}>
            <Image
              style={styles.image}
              source={
                text.includes("Gasolina")
                  ? require("./images/gasolina.png")
                  : text.includes("Etanol")
                  ? require("./images/alcool.png")
                  : null
              }
            />
            {text.includes("Etanol") ? (
              <Text style={styles.sectionImg}>
                OBS: O uso do etanol é somente é vantajoso pois o litro custar
                até 70% do valor do litro da gasolina.
              </Text>
            ) : text.includes("Gasolina") ? (
              <Text style={styles.sectionImg}>
                OBS: O uso do etanol não é vantajoso pois o litro custar mais
                que 70% do valor do litro da gasolina.
              </Text>
            ) : null}
          </View>
        ) : null}
      </View>
    </View>
  );
}
