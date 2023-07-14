import { View, Text, StyleSheet, ImageBackground, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import React from 'react';

import bg from '../../assets/images/BG.png';
import Message from '../components/Message';
import InputBox from '../components/inputBox';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { authentication,db } from '../firebase/firebase-config';
import { collection, getDocs, query, where, onSnapshot } from 'firebase/firestore';
import { ActivityIndicator } from 'react-native';

const ChatingScreen = ({ route }) => {
  const navigation = useNavigation();
  const chatID = route.params.id;
 
  const [chatRoom, setchatRoom] = useState([]);

  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);

  useEffect(() => {
    const chatRoomQuery = query(collection(db, 'chatRooms'), where('id', '==', chatID));

    const unsubscribe = onSnapshot(chatRoomQuery, (snapshot) => {
      const messageData = snapshot.docs.map((doc) => doc.data());
      setchatRoom([messageData]);
    });

    return () => {
      unsubscribe();
    };
  }, [chatID]);

   if (chatRoom.length === 0) {
    return <ActivityIndicator />;
  }
  //console.log(chatRoom);

  return (
    <ImageBackground source={bg} style={styles.bg}>
      <FlatList
        data={chatRoom}
        renderItem={({ item }) => <Message message={item} />}
        style={styles.list}
        inverted
      />
      <InputBox chatroom={chatRoom}/>
    </ImageBackground>
  );
};

export default ChatingScreen;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});
