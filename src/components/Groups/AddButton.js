import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/core'


const AddButton = () => {
    const navigation =useNavigation()
    const handleCreateGroup = () =>{
        navigation.navigate('Group');
    }

  return (
    <View style={styles.Addcontainer}>
        <TouchableOpacity style={styles.addIcon} onPress={handleCreateGroup}>
            <Text style={styles.Icon}>+</Text>
            </TouchableOpacity>
    </View>
  )
}

export default AddButton

const styles = StyleSheet.create({
    Addcontainer:{
        position:'relative',
        // bottom: 2,
        // right: 20,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        zIndex:1
      },
    addIcon:{
        backgroundColor:'royalblue',
        height:50,
        width:50,
        borderRadius:50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Icon:{
        color:'white',
        fontSize:25,
    },

})