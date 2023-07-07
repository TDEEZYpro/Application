import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'

const ChatList = () => {
  return (
    <View style={styles.container}>
        <Image source={require('C:/development/ChatWave/chatwave/assets/me.jpg')} 
        style={styles.Image}></Image>
    <View style={styles.content}>
        <View style={styles.row}>
            <Text numberOfLines={1} style={styles.name}>User Name</Text>
            <Text style={styles.subTitle}>8:30</Text>
        </View>

        <Text numberOfLines={2} style={styles.subTitle}>Hello Text</Text>
    </View>
    

    </View>
    
  )
}

export default ChatList

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        height:70
    },
    Image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    content:{
        flex:1,//fill in the space
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    row:{
        flexDirection: 'row',
        marginBottom: 5,
    },
    name:{
        fontSize: 15,
        flex: 1,
        fontWeight: 'bold'
    },
    subTitle:{
        color: 'gray'
    }

})