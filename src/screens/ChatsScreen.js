import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ChatList from '../components/ChatListItem/chatList';
import { collection, getDocs, onSnapshot,query } from 'firebase/firestore';
import { authentication, db } from '../firebase/firebase-config';

const ChatsScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loggedInUser = authentication.currentUser.uid;
    const chatRoomsQuery = query(collection(db, 'chatRooms'));

    const unsubscribe = onSnapshot(chatRoomsQuery, (snapshot) => {
      const filteredData = snapshot.docs.map((doc) => {
        const ChatsData = doc.data();
        if (ChatsData.usersID && ChatsData.usersID.includes(loggedInUser)) {
          return ChatsData;
        }
        return null;
      }).filter((ChatsData) => ChatsData !== null);

      setUsers(filteredData); 
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <FlatList
      data={users} 
      renderItem={({ item }) => <ChatList chat={item} />}
      style={styles.container}
    />
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
