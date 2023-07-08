import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator  from './navigation/appNavigation';
import ChatingScreen from './src/screens/ChatingScreen';



export default function App() {
  return (
      // <AppNavigator />
      <View style={styles.container}>
        <ChatingScreen />
        <StatusBar style="auto"/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',

    paddingVertical:30,    
  },
});
