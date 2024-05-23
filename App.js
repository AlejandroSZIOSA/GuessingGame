import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const GUESS_DATA = {
  question: "What is the exactly high of Mount Everest? ",
  answer: 600,
};

export default function App() {
  const inputRef = useRef();
  const [result, setResult] = useState("Result");

  function handleSendBtn() {
    const enteredAnswer = inputRef.current.value;
    console.log(enteredAnswer);
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, paddingBottom: 30 }}>Guess</Text>
      <Text style={{ fontSize: 20 }}> {GUESS_DATA.question}</Text>

      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          ref={inputRef}
          maxLength={3}
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
    borderWidth: 1,
    /* padding: 10, */
  },
  inputsContainer: {
    flex: 0,
    flexDirection: "row",
    paddingVertical: 15,
    alignItems: "center",
    gap: 8,
  },

  resultContainer: {
    height: 200,
    width: 300,
    textAlign: "center",
    borderWidth: 1,
    paddingVertical: 15,
  },
});
