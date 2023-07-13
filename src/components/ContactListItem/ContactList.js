import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection } from 'firebase/firestore';
import { authentication, db } from '../../firebase/firebase-config';
import { v4 as uuidv4 } from 'uuid';

const generateChatroomId = () => {
  const randomId = uuidv4();
  return randomId;
};

const ContactList = ({ user, onSelectUser }) => {
  const navigation = useNavigation();

  const isStatus = () => {
    return user.status != null;
  };

  const pressContact = async () => {

    try {
      const chatroomId = generateChatroomId();
      const selectedUserId = user.uid; // Get the selected user's ID
      const newChatRoomData = {
        LastMessage: '',
        Messages: [],
        deleted: '',
        chatRoomLastMessageID: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        usersID: [authentication.currentUser.uid, selectedUserId],
        id: chatroomId,
        name: user.Name,
        photoURL: user.photoURL
      };

      const chatRoomRef = collection(db, 'chatRooms');
      await addDoc(chatRoomRef, newChatRoomData);

      console.log({ id: chatroomId });

      navigation.navigate('Chat');
    } catch (error) {
      console.error('Error creating chat room:', error);
    }
  };

  return (
    <Pressable onPress={pressContact} style={styles.container}>
      <Image source={{ uri: user.photoURL }} style={styles.Image} />
      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.name}>
          {user.Name}
        </Text>
        <Text numberOfLines={2} style={styles.status}>
          {isStatus() ? user.Status : 'Hey there! I am using chatwave!!'}
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
