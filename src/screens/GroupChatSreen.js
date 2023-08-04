import { View, Text,StyleSheet ,Image, TextInput, TouchableOpacity,Modal} from 'react-native'
import React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/core';

const GroupChatSreen = () => {
    const photoURL = "https://icon-library.com/images/group-chat-icon/group-chat-icon-13.jpg";
    const [groupName, setGroupName] = useState();
    const navigation = useNavigation();

    const handlNext = () =>{
        navigation.navigate('CreateGroup',{grpName: groupName})
    }

  return (
    <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
                <Text style={styles.textCreate}>Create Group Chat</Text>
            <View >
                <Image source={{uri: photoURL}} style={styles.Image}/>
            </View>
            <View style={styles.inputName}>
                <TextInput placeholder='Enter group name...'
                    style={styles.input}
                    onChange={text =>setGroupName(text)}
                    ></TextInput>
                    <View style={styles.subContainer}>
                        <TouchableOpacity style={styles.createButton}
                            onPress={handlNext}
                            
                        >
                            <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Next</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
        
    </View>
  )
}

export default GroupChatSreen

const styles= StyleSheet.create({
    mainContainer:{
        backgroundColor:'white',
        height:'100%',
        width:'100%',
        position:'relative',
        alignItems:'center',
        justifyContent:'center'
    },
    subContainer:{
        height:'100%',
        position:'relative',
        alignItems:'center',
        top:'17%'
    },
    Image: {
        width: 200,
        height: 200,
        borderRadius: 90,
        marginTop: '20%',
      },
      textCreate:{
        fontSize:20,
        color:'royalblue',
        marginHorizontal:10,
      },
      inputName:{
        top: 50,
        width:300,
        paddingVertical: 10,
      },
      input:{
        borderBottomColor:'black',
        borderBottomWidth: 1,
      },
      createButton:{
        backgroundColor:'royalblue',
        color:'white',
        padding:'5%',
        paddingHorizontal:50,
        borderRadius:10,
      }
})

