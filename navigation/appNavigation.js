import React, { useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../src/screens/LoginScreen";
import SignupScreen from "../src/screens/SignupScreen";
import ChatsScreen from "../src/screens/ChatsScreen";
import ChatingScreen from "../src/screens/ChatingScreen";
import MainTabNavigator from "./mainTabNavigator";
import ConstactsScreen from "../src/screens/ConstactsScreen";
import { onAuthStateChanged } from 'firebase/auth';
import { authentication } from '../src/firebase/firebase-config';
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: { backgroundColor: 'white' , fontSize: 40,
        fontWeight: 'bold',
        color:'black'
    
       }
      
    }} >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

const ChatStack = () => {
  return (
    <Stack.Navigator style={{alignItems:'center'}}>
      <Stack.Screen name="Home" component={MainTabNavigator} 
      options={{ headerShown: false }}
      />
      <Stack.Screen name="Chat" component={ChatingScreen} 
       />
      <Stack.Screen name="Contacts" component={ConstactsScreen} />
    </Stack.Navigator>
  );
};

const LoadingScreen = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color='royalblue' />
    </View>
  );
}

const AppNavigator = () => {
  const [user, setUser] = useState(null);
  const [initialAuthChecked, setInitialAuthChecked] = useState(false);
  const [isAppLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authentication, (authenticatedUser) => {
      setUser(authenticatedUser);
      setInitialAuthChecked(true);
      setAppLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (isAppLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      {initialAuthChecked && (user ? <ChatStack /> : <AuthStack />)}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppNavigator;
