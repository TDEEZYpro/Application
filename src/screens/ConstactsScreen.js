import { FlatList, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import ContactList from '../components/ContactListItem/ContactList';
import { collection, getDocs, query, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';
import Invite from '../components/ChatListItem/invite';
import { useEffect } from 'react';
import AddButton from '../components/Groups/AddButton';
import { SafeAreaView } from 'react-native-safe-area-context';

const ContactsScreen = () => {
  const [chatsData, setChatsData] = useState([]);

  useEffect(() => {
    const usersQuery = query(collection(db, 'Users'));

    const unsubscribe = onSnapshot(usersQuery, (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      setChatsData(data);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const updateChatList = (newData) => {
    // Update the chat list with the new data
    setChatsData(newData);
  };
  return (
    <View style={styles.mainContainer}>
      <View>
        <View>
          <Invite updateChatList={updateChatList}/>
          <View style={styles.listContainer}>
            <FlatList
              data={chatsData}
              renderItem={({ item }) => (
                <ContactList user={item}/>
              )}
              keyExtractor={(item) => item.uid}
            />
          </View>
        </View>
      </View>
      <View style={styles.addContainer}>
          <AddButton />
      </View>
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    height:'100%',
    width:'100%'
  },
  listContainer: {
    position:'relative',
    backgroundColor: 'white',
  },
  addContainer: {
    position:'relative',
    bottom:-100,
    right:10,
    zIndex: 1,
  },
});
