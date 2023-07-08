import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import ChatList from '../components/ChatListItem/chatList'
import chats from '../../assets/data/chats.json'

const ChatsScreen = () => {
  return (
    <FlatList
    data={chats} renderItem={({item}) => <ChatList chat={item}/>}
    style={styles.container}
    />
   
  )
}
export default ChatsScreen;

const styles = StyleSheet.create({
    container: {
        paddingVertical:40,
        // backgroundColor: 'black',
    }
})