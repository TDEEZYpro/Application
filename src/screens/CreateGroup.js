import { View, Text } from 'react-native'
import React from 'react'

const CreateGroup = ({route}) => {
    const {grpName} = route.params;
    console.log(grpName)
  return (
    <View>
      <Text>{grpName}</Text>
    </View>
  )
}

export default CreateGroup