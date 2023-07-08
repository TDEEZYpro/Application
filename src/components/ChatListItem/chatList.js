import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime);

const ChatList = ({chat}) => {
    //console.log({uri: chat.user.image});
    //console.log(chat.user.image);
  return (
    <View style={styles.container}>
        {/* for local */}
        {/* <Image source={chat.user.image} */}
        {/* for internet */}
        <Image source={{uri: chat.user.image}} 
        style={styles.Image}></Image>
    <View style={styles.content}>
        <View style={styles.row}>
            <Text numberOfLines={1} style={styles.name}>
                {chat.user.name}
            </Text>
            <Text style={styles.subTitle}>
            {dayjs(chat.lastMessage.createdAt).fromNow(true)}
            </Text>
        </View>

        <Text numberOfLines={2} style={styles.subTitle}>
            {chat.lastMessage.text}  
        </Text>
    </View>
    

    </View>
    
  )
}

export default ChatList;

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
        fontWeight: 'bold',
        //color: 'white'
    },
    subTitle:{
        color: 'gray'
    }

})