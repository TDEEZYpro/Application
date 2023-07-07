import { View, Text, Button } from 'react-native'
import { StyleSheet, TextInput } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate('Login');
  };

 
  return (
    
      <View style={styles.inputContainer}>
      <Text>SignupScreen</Text>
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
        <Button title='register'></Button>
      <Button title='Back' onPress={handleBack}></Button>
    </View>
  )
}

export default SignupScreen

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