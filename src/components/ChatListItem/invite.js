import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { authentication, db } from '../../firebase/firebase-config';
import { collection, addDoc, getDocs, where } from 'firebase/firestore';

const Invite = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [roomID, setRoomID] = useState('');
  
  const handleSearch = () => {
    // Check if user is registered with Firebase email
    // const addUser = addDoc(collection(db, "chatRooms"),{
    //   uid: user.uid,
    //   Name: name,
    //   Email: email,
    //   Status: isStatus ? 'Hey there, I am using chatwave' : status,
    //   photoURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngarts.com%2Ffiles%2F10%2FDefault-Profile-Picture-PNG-Download-Image.png&f=1&nofb=1&ipt=de1aa5cffa40e4cb3fa20a8a8c28bcde5b3b0010ae538de53df5234b91bbaa6f&ipo=images"
    // }).then(()=>{
    //   alert('Welcome to chatwave')
     
    // }).catch((error)=>{
    //   console.log(error);
      
    // });

    saveInvite();
  };

  const saveInvite = () => {
    
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Invite;
