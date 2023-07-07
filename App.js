import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator  from './navigation/appNavigation';




export default function App() {
  return (
      <AppNavigator 
       screenOptions={{
       headerShown: false
    }}
      style={styles.container}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingVertical:100,
    
  },
});
