import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../src/screens/LoginScreen";
import SignupScreen from "../src/screens/SignupScreen";
import ChatsScreen from "../src/screens/ChatsScreen";
import ChatingScreen from "../src/screens/ChatingScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator 
      screenOptions={{
        headerShown : false

      }}>
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        {/* <Stack.Screen name="Signup" component={SignupScreen} /> */}
        {/* <Stack.Screen name='Chats' component={ChatsScreen} /> */}
        {/* <Stack.Screen name='Chat' component={ChatingScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;  

