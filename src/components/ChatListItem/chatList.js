<<<<<<< HEAD
import { View, Text, Image, StyleSheet, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime);



const ChatList = ({chat}) => {
    const navigation = useNavigation();
    //console.log({uri: chat.user.image});
    //console.log(chat.user.image);
    const { id, name, photoURL, Messages, createdAt, LastMessage,usersID} = chat;
    
  return (
    <Pressable onPress={() => navigation.navigate('Chat', {id: id, name: name,messages: Messages, usersID: usersID })} style={styles.container}>
        {/* for local */}
        {/* <Image source={chat.user.image} */}
        {/* for internet */}
        <Image source={{uri: photoURL}} 
        style={styles.Image}></Image>
    <View style={styles.content}>
        <View style={styles.row}>
            <Text numberOfLines={1} style={styles.name}>
                {name}
            </Text>
            <Text style={styles.subTitle}>
            {dayjs(createdAt.toDate()).fromNow(true)}
            </Text>
        </View>

        <Text numberOfLines={2} style={styles.subTitle}>
            {LastMessage}  
        </Text>
    </View>
    

    </Pressable>
    
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
=======
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const ChatList = ({ chat }) => {
  const navigation = useNavigation();
  const { id, name, photoURL, Messages, updatedAt, LastMessage, usersID } = chat;

  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Chat', {
          id: id,
          name: name,
          messages: Messages,
          usersID: usersID,
        })
      }
      style={styles.container}
    >
      <Image source={{ uri: photoURL }} style={styles.Image} />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            {name}
          </Text>
          <Text style={styles.subTitle}>
            {dayjs(updatedAt.toDate()).fromNow(true)}
          </Text>
        </View>

        <Text numberOfLines={2} style={styles.subTitle}>
          {LastMessage}
        </Text>
      </View>
    </Pressable>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  Image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  name: {
    fontSize: 15,
    flex: 1,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'gray',
  },
});
>>>>>>> 97de0230d9fd02fc4461f9549053bdcc38308256
