import { View, Text, StyleSheet, ImageBackground, FlatList} from 'react-native'
import React from 'react'

import bg from '../../assets/images/BG.png'
import Message from '../components/Message'
import messages from '../../assets/data/messages.json'

const ChatingScreen = () => {
  return (
    <ImageBackground source={bg} style={styles.bg}>
    <FlatList
      data={messages}
      renderItem={({item}) => <Message message={item} />} 
      style={styles.list} 
    inverted
    />
    </ImageBackground>
  )
}

export default ChatingScreen;

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    list: {
      padding: 10,
    }
})
