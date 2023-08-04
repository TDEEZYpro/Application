import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection, onSnapshot, query, where } from 'firebase/firestore';
import { authentication, db } from '../../firebase/firebase-config';
import { v4 as uuidv4 } from 'uuid';

const generateChatroomId = () => {
  const randomId = uuidv4();
  return randomId;
};

const createChatRoom = ( newChatRoomData) =>{
  console.log('adding to databse')
  
}

const callChatRoom = async (user, chatroomId, selectedUserId, currentUserUid, navigation) => {
  try {
    const newChatRoomData = {
      LastMessage: '',
      Messages: [],
      deleted: '',
      chatRoomLastMessageID: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      usersID: [currentUserUid, selectedUserId],
      id: chatroomId,
      name: user.Name,
      photoURL: user.photoURL,
    };

    const chatRoomRef = query(
      collection(db, 'chatRooms'),
      where('usersID', 'array-contains', selectedUserId)
    );

    // Wrap onSnapshot in a Promise to handle the resolved data
    const snapshotPromise = new Promise((resolve, reject) => {
      const unsubscribe = onSnapshot(chatRoomRef, (snapshot) => {
        const roomData = snapshot.docs.map((doc) => doc.data());
        console.log(roomData);
        resolve(roomData);
        unsubscribe(); // Unsubscribe the listener once resolved
      }, reject);
    });

    // Wait for the data to resolve and handle it
    const roomData = await snapshotPromise;

    if (roomData.length > 0) {
      // Existing room
      console.log('It exists');
      console.log('id = ' + roomData[0].id);
      console.log('Name = ' + roomData[0].name);
      console.log('Messages: ' + roomData[0].Messages);
      console.log('users: ' + roomData[0].usersID);
      navigation.navigate('Chat', {
        usersID: roomData[0].usersID,
        id: roomData[0].id,
        name: user.Name,
      });
    } else {
      // Room doesn't exist, create a new one
      console.log('It doesn\'t exist');
      const roomRef = collection(db, 'chatRooms');
      addDoc(roomRef, newChatRoomData);
      console.log('added: ' + newChatRoomData[0]);
    }
  } catch (error) {
    console.error('Error creating chat room:', error);
  }
};


const ContactList = ({ user }) => {
  const navigation = useNavigation();

  const pressContact = () => {
    try {
      const chatroomId = generateChatroomId();
      const selectedUserId = user.uid; 
      const currentUserUid = authentication.currentUser.uid; 
  
       callChatRoom(user, chatroomId, selectedUserId, currentUserUid, navigation);
    } catch (error) {
      console.error('Error creating chat room:', error);
    }
  };

  const isCurrentUser = user.uid === authentication.currentUser.uid;

  return (
    <Pressable onPress={pressContact} style={styles.container}>
      <Image source={{ uri: user.photoURL }} style={styles.Image} />
      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.name}>
          {isCurrentUser ? 'You' : user.Name}
        </Text>
        <Text numberOfLines={2} style={styles.status}>
          {user.Status ?  user.Status:'Hey there! I am using chatwave!!'}
        </Text>
      </View>
    </Pressable>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  Image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  status: {
    color: 'gray',
  },
});
