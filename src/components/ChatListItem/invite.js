import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { authentication, db } from '../../firebase/firebase-config';
import { collection, addDoc, getDocs, where,query } from 'firebase/firestore';

const Invite = ({ updateChatList }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [roomID, setRoomID] = useState('');

  const handleSearch = async () => {
    // Check if user is registered with Firebase email
    const usersRef = collection(db, 'Users');
    const queryByEmail = where('Email', '==', email);
    const queryByName = where('Name', '==', name);

    let filteredData = [];
    try {
      if (email) {
        const querySnapshot = await getDocs(query(usersRef, queryByEmail));
        filteredData = querySnapshot.docs.map((doc) => doc.data());
      } else if (name) {
        const querySnapshot = await getDocs(query(usersRef, queryByName));
        filteredData = querySnapshot.docs.map((doc) => doc.data());
      }
      // Update the chat list in ContactsScreen using the callback
      updateChatList(filteredData);
    } catch (error) {
      console.error('Error searching for users:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter email or username..."
        value={email||name}
        onChangeText={(text) => {
          if (text.includes('@')) {
            setEmail(text);
            setName('');
          } else {
            setName(text);
            setEmail('');
          }
        }}
      />
      <TouchableOpacity onPress={handleSearch} style={styles.buttonContainer}>
        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flexDirection:'row'
  },
  buttonContainer: {
    padding: 10,
    marginLeft:10,
    backgroundColor:'royalblue'
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop:10
  },
  text:{
    color:'white',
    fontWeight:'bold',
    
  }
});

export default Invite;
