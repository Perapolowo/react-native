import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log("I'm Pressing")
  }
  return (
    <View style={styles.container}>
      <Text onPress={handlePress}>Open up App.js to start working on your app! eiei</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
