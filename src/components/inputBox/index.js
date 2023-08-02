<<<<<<< HEAD
import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { authentication, db } from '../../firebase/firebase-config';
import {  doc, where, arrayUnion, query, getDocs, collection, updateDoc } from 'firebase/firestore';

const InputBox = ({chatroom}) => {
  //state data
  const [content, setContent] = useState('');
  const currUser = authentication.currentUser.uid;
  const [newMessage, setNewMessage] = useState(); 

  const updateField = async () => {
    try {
                const chatRoomID = chatroom[0].id;
                const q = query(collection(db, 'chatRooms'), where('id', '==', chatRoomID));
                const querySnapshot = await getDocs(q)

                if (querySnapshot.empty) {
                    console.log('Document not found');
                    return;
                  }
                
                  const docRef = doc(db, 'chatRooms', querySnapshot.docs[0].id);
                
                  // Update the document
                  await updateDoc(docRef, { 
                    Messages: arrayUnion({ id: chatroom[0].id,
                                            text: content,
                                            userID: currUser,}),
                    LastMessage: content,
                    chatRoomLastMessageID: currUser,
                    updatedAt: new Date(),
                   });
      // Access the data and filter based on chatid
      console.log('Fields updated successfully');
    } catch (error) {
      console.log('Error updating field:', error);
    }
  };


  const onSend = async () => {
  

    if(content != ''){
        await updateField();
    }

    console.log('Sending a new Message:', newMessage);

    setContent('');
  };

  return (
    <View style={styles.container}>
      {/* Icon */}
      <AntDesign style={styles.plus} name="plus" size={24} color="royalblue" />
      {/* text input */}
      <TextInput
        value={content}
        onChangeText={setContent}
        style={styles.input}
        placeholder="type your message..."
        multiline
      />

      {/* send icon */}
      <MaterialIcons
        onPress={onSend}
        style={styles.send}
        name="send"
        size={20}
        color="white"
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 50,
    paddingHorizontal: 10,
    borderColor: 'lightgray',
    borderWidth: 1,
    marginHorizontal: 10,
  },
  send: {
    padding: 7,
    backgroundColor: 'royalblue',
    borderRadius: 20,
  },
  plus: {
    paddingTop: 6,
  },
});
=======
import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { authentication, db } from '../../firebase/firebase-config';
import {  doc, where, arrayUnion, query, getDocs, collection, updateDoc } from 'firebase/firestore';

const InputBox = ({chatroom}) => {
  //state data
  const [content, setContent] = useState('');
  const currUser = authentication.currentUser.uid;
  const [newMessage, setNewMessage] = useState(); 

  const updateField = async () => {
    try {
                const chatRoomID = chatroom[0][0].id;
                const q = query(collection(db, 'chatRooms'), where('id', '==',chatroom[0][0].id));
                const querySnapshot = await getDocs(q)

                if (querySnapshot.empty) {
                    console.log('Document not found');
                    return;
                  }
                
                  const docRef = doc(db, 'chatRooms', querySnapshot.docs[0].id);
                
                  // Update the document
                  await updateDoc(docRef, { 
                    Messages: arrayUnion({ id: chatroom[0][0].id,
                                            text: content,
                                            userID: currUser,
                                            createdAt:new Date()}),
                    LastMessage: content,
                    chatRoomLastMessageID: currUser,
                    updatedAt: new Date(),
                   });
                   // Access the data and filter based on chatid
                   console.log('Fields updated successfully');
                  } catch (error) {
                    console.log('Error updating field:', error);
                  }
                };
                
                
                const onSend = async () => {
                  console.log(chatroom[0][0].id);
                  
            if(content !== ''){
              setContent(newMessage);
                    await updateField();
    }

    console.log('Sending a new Message:', content);

    setContent('');
  };

  return (
    <View style={styles.container}>
      {/* Icon */}
      <AntDesign style={styles.plus} name="plus" size={24} color="royalblue" />
      {/* text input */}
      <TextInput
        value={content}
        onChangeText={setContent}
        style={styles.input}
        placeholder="type your message..."
        multiline
      />

      {/* send icon */}
      <MaterialIcons
        onPress={onSend}
        style={styles.send}
        name="send"
        size={20}
        color="white"
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 50,
    paddingHorizontal: 10,
    borderColor: 'lightgray',
    borderWidth: 1,
    marginHorizontal: 10,
  },
  send: {
    padding: 7,
    backgroundColor: 'royalblue',
    borderRadius: 20,
  },
  plus: {
    paddingTop: 6,
  },
});
>>>>>>> 97de0230d9fd02fc4461f9549053bdcc38308256
