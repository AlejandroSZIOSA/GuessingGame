import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const GUESS_DATA = {
  question: "What is the exactly high of Mount Everest? ",
  answer: 3600,
};

export default function App() {
  const [userInput, setUserInput] = useState();
  const [result, setResult] = useState("Result");

  function handleSendBtn() {
    if (userInput == GUESS_DATA.answer) {
      setResult("That is the answer :)");
    } else if (userInput <= 4000 && userInput >= 3000) {
      setResult("Hög");
    } else setResult("Lög");
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, paddingBottom: 30 }}>Guess</Text>
      <Text style={{ fontSize: 20 }}> {GUESS_DATA.question}</Text>

      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(userInput) => setUserInput(userInput)}
          maxLength={4}
          keyboardType="numeric"
          placeholder={"Your answer"}
        />
        <Text>Meters</Text>

        <Button title="Send" onPress={handleSendBtn} color="#841584" />
      </View>

      <View style={styles.resultContainer}>
        <Text>{result}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 80,
    margin: 12,
    borderWidth: 2,
    borderColor: "#841584",
  },
  inputsContainer: {
    flex: 0,
    flexDirection: "row",
    paddingVertical: 15,
    alignItems: "center",
    gap: 8,
  },
  resultContainer: {
    width: 300,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#841584",
    paddingVertical: 15,
  },
});
