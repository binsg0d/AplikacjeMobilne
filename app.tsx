import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style= {styles.title}>Smart Campus</Text>
      <Text style= {styles.subtitle}>Moja pierwsza aplikacja mobilna</Text>
      <StatusBar style="auto" />
      <Button title="Zwiększ" onPress={() => setCount(count + 1)} />
</View> 

);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 16,
    marginTop: 10,
  },
});
  
