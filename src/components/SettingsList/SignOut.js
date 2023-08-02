<<<<<<< HEAD
import { View, Text, Button } from 'react-native'
import React from 'react'
import { authentication } from '../../firebase/firebase-config';
import { signOut } from 'firebase/auth';

const SignOut = () => {
    const handleSignOut = async () => {
        try{
            await signOut(authentication);
        } catch{
            console.log('Eroor signing out:', error);
        }
    }

  return (
    <View>
      <Button onPress={handleSignOut} title="SignOut"/>
    </View>
  )
}

=======
import { View, Text, Button } from 'react-native'
import React from 'react'
import { authentication } from '../../firebase/firebase-config';
import { signOut } from 'firebase/auth';

const SignOut = () => {
    const handleSignOut = async () => {
        try{
            await signOut(authentication);
        } catch{
            console.log('Eroor signing out:', error);
        }
    }

  return (
    <View>
      <Button onPress={handleSignOut} title="SignOut"/>
    </View>
  )
}

>>>>>>> 97de0230d9fd02fc4461f9549053bdcc38308256
export default SignOut;