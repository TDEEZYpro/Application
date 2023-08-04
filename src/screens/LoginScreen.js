import React, { useState } from 'react';
import { View,  Modal,Image, Text, StyleSheet, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { authentication, db } from '../firebase/firebase-config';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import logo from '../../assets/images/chatwave.png';
import firebase from 'firebase/compat/app'


const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisibleForgot,setmodalVisibleForgot] = useState(false);
  const [code, setCode] = useState();

  const handleSignup = () => {
    navigation.replace('Signup');
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(authentication,email, password)
    .then((userCredential)=>{
      console.log("Account LoggedIn");
      console.log(userCredential);
      navigation.replace('Home');
    }
    ).catch((error) => {
      email ? alert('Please enter a valid email/password') : alert("Email/Password Not entered");
      console.log(error);
    }
    )
  }

  const actionCodeSettings = {
    url: email,
    iOS: {
       bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
    handleCodeInApp: true
  };
 
  const handleForgetPassword = async () => {
    await sendPasswordResetEmail(authentication,email,actionCodeSettings)
    await confirmPasswordReset('user@example.com', code)
    .then(() => {
      // Password reset email sent
        console.log('Password reset email sent.'); 
        setModalVisible(false);
        setModalConfirmVisible(true);
        alert('Reset completed, please login')
        navigation.replace('Login');
        setModalVisible(false);
      })
      .catch((error) => {
        // Error occurred
        console.log(error);
        alert('This account does not exist, please try again or register an account');
      });
  }
  const closeConfirmationModal = () => {
    setModalConfirmVisible(false);
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <View style={styles.container2}>
    
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
      </View>
        <TouchableOpacity title="Login" onPress={handleLogin} style={styles.button}><Text>Login</Text></TouchableOpacity>
        <View style={styles.signUpText}>
          <Text >Do you have an account?
            <View>
            <TouchableOpacity 
          title="Sign Up" onPress={handleSignup}
          style={styles.signUpText3}
          >
            <Text style={styles.signUpText2}> Sign Up</Text></TouchableOpacity>
            </View>
          </Text>
            
        </View>
        <View style={styles.forgetPasswordContainer}>
      <TouchableOpacity
        onPress={() => setmodalVisibleForgot(true)}
      >
        <Text style={styles.forgetPasswordText}>Forget Password?</Text>
      </TouchableOpacity>
    </View>
          </View>


        <Modal
      onPress={() => setmodalVisibleForgot(true)}
      animationType="slide"
      transparent={false}
      visible={modalVisibleForgot}
      
    >
      <View style={styles.modalContainer}>
      <Text style={styles.title}>Enter your email</Text>
      <Text style={styles.title2}>to reset password</Text>
        <TextInput
          style={styles.textInputf}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity style={styles.buttonf} onPress={handleForgetPassword}>
            <Text style={styles.buttonText}>Submit</Text> 
          </TouchableOpacity>
          
        </View>
        <TouchableOpacity
            style={styles.cancelButtonf}
            onPress={() => setmodalVisibleForgot(false)}>
            <Text style={styles.cancelButtonTextf}>Cancel</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2:{
    alignItems: 'center',
    flex: 1,
    top:15,
    padding:5
  },
  inputContainer: {
    width: 400,
    marginBottom:20,
   
  },
  //TextInput for both email and password
  input: {
    backgroundColor: '#fff',
    width: 350,
    paddingVertical: 10,
    marginTop: 5,
    borderRadius:20,
    borderBottomColor:'black',
    borderBottomWidth: 1,
    paddingLeft:30,
    marginHorizontal:25,
    marginTop:15,
    marginBottom:15
  },
  button: {
    backgroundColor: 'royalblue',
    width: 300,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  logo:{
    width: 300,
    height: 250,
    flexWrap: 'nowrap',
    top: -0
  },
  signUpText:{
    marginTop:20,
  },
  signUpText2:{
    marginTop:5,
    color:'blue',
    marginTop:15
  },
  signUpText3:{
    marginTop:10,
  },
  //forgetpassword
  forgetPasswordText: {
    color: 'royalblue',
    fontWeight: 'bold',
    fontSize:13,
    marginTop:20,
  }, helptext: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize:14,
    textAlign: 'center',
    alignItems:'center',
    marginTop:20,
    
  },
    forgetPasswordContainer: {
      alignItems: 'flex-end',
      marginTop: 10,
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0782F9',
    marginTop:1,
    marginBottom:1,
  },
  title2:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0782F9',
    marginTop:1,
    marginBottom:20,
  },
   textInputf: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    width: "80%",
    marginBottom: 10,
    padding: 10
  },
  ////modal format
  modalContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30
  },
  textInputf: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    width: "80%",
    marginBottom: 10,
    padding: 10
  },
  buttonf: {
    backgroundColor: "#0782F9",
    padding: 10,
    borderRadius: 5,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15
  },
  cancelButtonf: {
    backgroundColor: "#0782F9",
    padding: 10,
    borderRadius: 0,
    alignItems: "center",
    marginTop: 10
  },
  cancelButtonTextf: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15
  }

 
});
