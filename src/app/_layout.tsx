import React from 'react';
import '../styles/global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import RegisterUser from './registerUser';
import Login from './login';


type RootStackParamList = {
  login: undefined;
  Home: undefined;
  Register: undefined;
  Recover: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ headerShown: false }} />
      {/* <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}

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
          name="Register" 
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
          component={HomeTabs} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}
