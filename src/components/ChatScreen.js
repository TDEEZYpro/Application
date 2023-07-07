import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import ChatList from './ChatListItem/chatList'
import chats from '../../assets/data/chats.json'

const ChatScreen = () => {
  return (
    <FlatList
    data={chats} renderItem={({item}) => <ChatList chat={item}/>}
    style={styles.container}
    />
  )
}

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        paddingVertical:40,
        //backgroundColor: 'red',
    }
})