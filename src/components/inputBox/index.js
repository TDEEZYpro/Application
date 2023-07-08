import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { AntDesign , MaterialIcons} from '@expo/vector-icons'
import { useState } from 'react'

const InputBox = () => {

    //state data
    const [newMessage, setNewMessage] = useState('');

    const onSend=() => {
        console.log('Sending a new Message:', newMessage);
        setNewMessage('');
    };


  return (
    <View style={styles.container}>
        {/* Icon */}
        <AntDesign style={styles.plus} name='plus' size={24} color='royalblue' />
        {/* text input */}
        <TextInput value={newMessage} onChangeText={setNewMessage}
         style={styles.input} placeholder='type your message...'
         multiline
         />

        {/* send icon */}
        <MaterialIcons onPress={onSend} style={styles.send} name='send' size={20} color='white'/>
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor: 'whitesmoke',
        padding: 5,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    input:{
        flex:1,
        backgroundColor:'white',
        padding: 5,
        borderRadius: 50,
        paddingHorizontal: 10,
        borderColor: 'lightgray',
        borderWidth: 1,
        marginHorizontal: 10,
    },
    send:{
        padding:7,
        backgroundColor: 'royalblue',
        borderRadius: 20,
    },
    plus:{
        paddingTop:6,
    }
})