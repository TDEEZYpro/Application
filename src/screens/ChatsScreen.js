import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ChatList from '../components/ChatListItem/chatList';
import { collection, getDocs } from 'firebase/firestore';
import { authentication, db } from '../firebase/firebase-config';

const ChatsScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const loggedInUser = authentication.currentUser.uid;
        const querySnapshot = await getDocs(collection(db, 'chatRooms'));

        // Access the data and filter based on usersID
        const filteredData = querySnapshot.docs.map((doc) => {
          const ChatsData = doc.data();
          if (ChatsData.usersID && ChatsData.usersID.includes(loggedInUser)) {
            return ChatsData;
          }
          return null;
        }).filter((ChatsData) => ChatsData !== null);

        setUsers(filteredData); // Update the state with filtered data
      } catch (error) {
        console.log('Error fetching chat rooms:', error);
      }
    };

    getUsers();
  }, []);
  return (
    <FlatList
      data={users} // Use the state variable 'users' as the data source
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
