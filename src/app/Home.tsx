import { View, Text } from 'react-native';
import HeaderCustom from './components/header';

export default function HomeScreen() {
 return (
   <View className='bg-[#1E2022] w-full h-full justify-center'>
    <HeaderCustom/>
    <View className='h-[90%]'></View>
   </View>
  );
}