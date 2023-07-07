import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  const handleLogin = () => {
    navigation.navigate('Chat');
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          // value={email}
          // onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          // value={password}
          secureTextEntry={true}
          // onChangeText={text => setPassword(text)}
        />
        <Button title="Login" onPress={handleLogin}/>
        <Button title="Sign Up" onPress={handleSignup} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: 400,
    justifyContent: 'center',
    marginTop: 20,
  },
  //TextInput for both email and password
  input: {
    backgroundColor: '#fff',
    width: 400,
    paddingVertical: 10,
    marginTop: 5,
    textAlign: 'center',
  },
});
