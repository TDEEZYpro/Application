import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator  from './navigation/appNavigation';
import ChatingScreen from './src/screens/ChatingScreen';
import AuthenticatedUserProvider from './src/auth/AuthenticatedUserProvider';


export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    backgroundColor:'whitesmoke'
  },
});
