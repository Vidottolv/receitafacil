import React from 'react';
import '../styles/global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import RegisterUser from './registerUser';
import Login from './login';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';


type RootStackParamList = {
  login: undefined;
  Home: undefined;
  registerUser: undefined;
  Recover: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

// function HomeTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'Settings') {
//             iconName = focused ? 'settings' : 'settings-outline';
//           }

//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: '#FBFAF7', 
//         tabBarInactiveTintColor: '#FBFAF7', 
//         tabBarStyle: {
//           backgroundColor: '#1E2022', 
//           borderTopWidth: 0,
//         },
//         tabBarLabelStyle: {
//           fontSize: 12, 
//           fontFamily: 'Itim',
//         },
//         tabBarIconStyle: {
//           marginTop: 5,
//         },

//       })}>
//       <Tab.Screen 
//         name="Home" 
//         component={HomeScreen}
//         options={{ headerShown: false }} />
//       {/* <Tab.Screen name="Profile" component={ProfileScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} /> */}
//     </Tab.Navigator>
//   );
// }

export default function App() {
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen 
          name="login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="registerUser" 
          component={RegisterUser} 
          options={{ headerShown: false }} 
        />
        {/* <Stack.Screen 
          name="RecoverPassword" 
          component={RecoverPasswordScreen} 
          options={{ headerShown: false }} 
        /> */}
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}
