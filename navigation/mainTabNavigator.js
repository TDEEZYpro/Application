import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NotImplementedScreen from '../src/screens/NotImplementedScreen';
import ChatsScreen from '../src/screens/ChatsScreen';
import { Entypo, Ionicons} from '@expo/vector-icons'
import SettingsScreen from '../src/screens/SettingsScreen';


const Tab = createBottomTabNavigator();

const MainTabNavigator = () =>{
return (
    <Tab.Navigator   screenOptions={{
        headerShown : true,
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: 'whitesmoke'},
        tabBarStyle: { backgroundColor: 'whitesmoke', paddingBottom: 5, height:55},
        
    }}>
        <Tab.Screen name="Chats" component={ChatsScreen}
          options={({navigation}) => ({
            tabBarIcon: ({color, size}) => (
            <Ionicons name="chatbubbles-sharp" size={size} color={color}/>
            ),
            headerRight: () => (
                <Entypo onPress={() => navigation.navigate('Contacts')}
                 name="new-message" 
                 size={18} 
                 color={'royalblue'} 
                 style={{marginRight:15}} />
            ),
        })}
    /> 
        <Tab.Screen 
            name="Status" 
            component={NotImplementedScreen}
            options={{
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="logo-whatsapp" size={size} color={color}/>
                    ),
                }}
        /> 
        <Tab.Screen name="Calls" component={NotImplementedScreen} 
           options={{
            tabBarIcon: ({color, size}) => (
            <Ionicons name="call-outline" size={size} color={color}/>
            ),
        }}
    /> 
        <Tab.Screen name="Settings" component={SettingsScreen}
            options={{
                tabBarIcon: ({color, size}) => (
                <Ionicons name="settings-outline" size={size} color={color}/>
                ),
            }}
        /> 
    </Tab.Navigator>
)
}

export default MainTabNavigator;