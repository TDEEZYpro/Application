import { FlatList, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import ContactList from '../components/ContactListItem/ContactList';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';
import Invite from '../components/ChatListItem/invite';
import { useEffect } from 'react';

const ContactsScreen = () => {
  const [chatsData, setChatsData] = useState([]);

  const handleSelectUser = (userId) => {
    // Perform actions with the selected user's ID
    console.log('Selected user ID:', userId);
    // ...additional logic
  };

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'Users'));
      const data = querySnapshot.docs.map((doc) => doc.data());
      setChatsData(data);
    };

    fetchData();
  }, []);
  return (
    <View>
      <Invite />
      <FlatList
        data={chatsData}
        renderItem={({ item }) => (
          <ContactList user={item} onSelectUser={handleSelectUser} />
        )}
        keyExtractor={(item) => item.uid}
        style={styles.container}
      />
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
