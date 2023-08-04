import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet , Touchable, View} from 'react-native';
import ChatList from '../components/ChatListItem/chatList';
import { collection, getDocs, onSnapshot,query,orderBy } from 'firebase/firestore';
import { authentication, db } from '../firebase/firebase-config';

const ChatsScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loggedInUser = authentication.currentUser.uid;
    const chatRoomsQuery = query(collection(db, 'chatRooms'), orderBy('updatedAt', 'desc'));

    const unsubscribe = onSnapshot(chatRoomsQuery, (snapshot) => {
      const filteredData = snapshot.docs.map((doc) => {
        const ChatsData = doc.data();
        if (ChatsData.usersID && ChatsData.usersID.includes(loggedInUser)) {
          return ChatsData;
        }
        return null;
      }).filter((ChatsData) => ChatsData !== null).filter((ChatsData) => ChatsData.LastMessage !== '');
      setUsers(filteredData); 
    });

    return () => {
      unsubscribe();
    };
  }, []);
  
  return (
    <View style={styles.chatContainer}>
      <FlatList
      data={users} 
      renderItem={({ item }) => <ChatList chat={item} />}
      style={styles.container}
    />
    
  

    </View>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
  chatContainer: {
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
  },
});
