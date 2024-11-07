import React from 'react';
import '../styles/global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import RegisterUser from './registerUser';
import Login from './login';
import { Entypo, Feather, Ionicons } from '@expo/vector-icons';
import Home from './Home';
import Agenda from './agenda';
import Receita from './receita';
import Ingrediente from './ingrediente';
import { Image, TouchableOpacity } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications'
import { useUserStore } from './store/userStore';
import AdicionarProduto from './addProduto';

type RootStackParamList = {
  login: undefined;
  Home: undefined;
  registerUser: undefined;
  Recover: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  const user = useUserStore((state) => state.user);
  return (
    <Tab.Navigator
      screenOptions={({
        tabBarActiveTintColor: '#FBFAF7', 
        tabBarInactiveTintColor: '#FBFAF7', 
        tabBarStyle: {
          backgroundColor: '#1E2022', 
          borderTopWidth: 0.2,
          shadowColor: '#FBFAF7',      
          shadowOpacity: 1,       
          shadowOffset: { 
            width: 2, 
            height: 4 
          }, 
          shadowRadius: 5,          
          elevation: 3,             
        },
        tabBarLabelStyle: {
          fontSize: 12, 
          fontFamily: 'Itim',
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
        headerStyle: {
          backgroundColor: '#1E2022'
        },
        headerTintColor: '#FBFAF7',
        headerTitleStyle: {
          fontFamily:'Itim',
          fontSize:32
        }
      })}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ 
          headerTitle:`Olá, ${user}!`,
          headerRight: () => (
            <TouchableOpacity onPress={() => console.log('clicado')}>
            <Image
                className='h-14 w-14 mr-10 -mt-4 rounded-full'
                source={
                    require('../../assets/images/DefaultUser.png')
                }/>
        </TouchableOpacity>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home-outline' color={color} size={size}/>
          )
        }}/>
      <Tab.Screen 
        name="ingrediente" 
        component={Ingrediente}
        options={{ 
          headerTitle:'Produtos',
          tabBarIcon: ({ color, size }) => (
            <Feather name='book-open' color={color} size={size}/>
          )
        }}/>
      <Tab.Screen 
        name="receita" 
        component={Receita}
        options={{ 
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name='add-to-list' color={color} size={size}/>
          )
        }}/>
      <Tab.Screen 
        name="agenda" 
        component={Agenda}
        options={{ 
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar-number-outline' color={color} size={size}/>
          )
        }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <Stack.Navigator initialRouteName="login"
            screenOptions={({
              tabBarActiveTintColor: '#FBFAF7', 
              tabBarInactiveTintColor: '#FBFAF7', 
              tabBarStyle: {
                backgroundColor: '#1E2022', 
                borderTopWidth: 0.2,
                shadowColor: '#FBFAF7',      
                shadowOpacity: 1,       
                shadowOffset: { 
                  width: 2, 
                  height: 4 
                }, 
                shadowRadius: 5,          
                elevation: 3,             
              },
              tabBarLabelStyle: {
                fontSize: 12, 
                fontFamily: 'Itim',
              },
              tabBarIconStyle: {
                marginTop: 5,
              },
              headerStyle: {
                backgroundColor: '#1E2022'
              },
              headerTintColor: '#FBFAF7',
              headerTitleStyle: {
                fontFamily:'Itim',
                fontSize:32
              }
            })}>
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
          component={HomeTabs} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="addProduto"
          component={AdicionarProduto}
          options={{
              headerTitle:'Produtos',
          }}
        />
      </Stack.Navigator>
    </ToastProvider>
  );
}
