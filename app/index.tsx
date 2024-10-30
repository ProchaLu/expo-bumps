import { useFocusEffect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  useFocusEffect(
    useCallback(() => {
      async function fetchApiRoute() {
        const response = await fetch('/api/hello');
        const data = await response.json();
        console.log(data);
      }

      fetchApiRoute().catch((error) => console.error(error));

      return () => {
        console.log('HomeScreen unfocused');
      };
    }, []),
  );

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
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
