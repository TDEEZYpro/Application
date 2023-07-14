import { View, Text, Button, Image } from 'react-native'
import { StyleSheet, TextInput } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { authentication,db } from '../firebase/firebase-config';
import {collection, addDoc} from 'firebase/firestore'
import logo from '../../assets/images/chatwave.png';

const SignupScreen = () => {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');

  const navigation = useNavigation();
  const handleBack = () => {
    navigation.replace('Login');
  };

  

  const handleSignup = () => {

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(name==''){
      alert("Invalid, Name value was not entered");
      return;
      }
      if(email==''){
      alert("Invalid, email value was not entered");
      return;
      }
      if(email==''){
        alert("Invalid, Password value was not entered");
        return;
      }
      if (!emailRegex.test(email)) {
          alert("Invalid Email entered");
          return;
      }

    createUserWithEmailAndPassword(authentication,email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name,
        Email: email,
        photoURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngarts.com%2Ffiles%2F10%2FDefault-Profile-Picture-PNG-Download-Image.png&f=1&nofb=1&ipt=de1aa5cffa40e4cb3fa20a8a8c28bcde5b3b0010ae538de53df5234b91bbaa6f&ipo=images"
      });
      const addUser = addDoc(collection(db, "Users"),{
        uid: user.uid,
        Name: name,
        Email: email,
        Status: status,
        photoURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngarts.com%2Ffiles%2F10%2FDefault-Profile-Picture-PNG-Download-Image.png&f=1&nofb=1&ipt=de1aa5cffa40e4cb3fa20a8a8c28bcde5b3b0010ae538de53df5234b91bbaa6f&ipo=images"
      }).then(()=>{
        alert('Welcome to chatwave')
       
      }).catch((error)=>{
        console.log(error);
        
      });

      console.log("Account created");
      navigation.replace('Login');
    }).catch((error) => {
      console.log("Account not created");
      console.log(error);
    })
  };

 
  return (

    <View style={styles.container}>
       <Image source={logo} style={styles.logo}/>
    <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholder="Enter Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <TextInput 
        style={styles.input}
        placeholder="Enter your status"
        keyboardType='numeric'
        maxLength={7000}
        value={status}
        onChangeText={text => setStatus(text)}
        />
       
           <Button title='register' 
                    onPress={handleSignup}
                    color={'royalblue'}
                    marginTop= {50}
                    ></Button>
          
    </View>
    </View>
  )
}

export default SignupScreen

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
    width: 400,
    paddingVertical: 10,
    marginTop: 5,
    borderRadius:20,
    borderBottomColor:'Black',
    borderBottomWidth: 1,
    paddingLeft:30,
    marginTop:15,
    marginBottom:15
  },
  button: {
    backgroundColor: '#fff',
    width: 400,
    paddingVertical: 10,
    marginTop: 5,
    borderRadius:20,
    borderBottomColor:'Black',
    borderBottomWidth: 1,
    paddingLeft:30,
    marginTop:15,
    marginBottom:15
  },
  logo:{
    width: 300,
    height: 250,
    flexWrap: 'nowrap',
    top: -20
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
});