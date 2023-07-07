import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../src/components/screens/LoginScreen";
import SignupScreen from "../src/components/screens/SignupScreen";
import ChatScreen from "../src/components/ChatScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name='Chat' component={ChatScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;  
