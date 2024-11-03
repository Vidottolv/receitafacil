import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function BottomTab() {
  const [isExpanded, setIsExpanded] = useState(false);
  let buttoncolor = '#FBFAF7';
  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

 return (
   <View className='h-[7%] w-full'>
    <View className='flex-row justify-between'>
    <TouchableOpacity style={{marginLeft:'8%', marginTop:'4%'}}
      onPress={() => console.log('eai')}>
      <Ionicons
        name='home'
        size={30}
        color={buttoncolor}/>
    </TouchableOpacity>
    <TouchableOpacity style={{marginTop:'4%'}}>
      <Feather
        name='book-open'
        size={30}
        color={buttoncolor}/>
    </TouchableOpacity>
    {/* <TouchableOpacity style={{marginTop:'4%'}} onPress={() => toggleExpand()}>
      <Ionicons
        name='add-circle-outline'
        size={30}
        color={buttoncolor}/>
    </TouchableOpacity> */}
    <TouchableOpacity style={{marginTop:'4%'}}>
      <Ionicons
      name='calendar-number-outline'
      size={30}
      color={buttoncolor}/>
    </TouchableOpacity>
    <TouchableOpacity style={{marginRight:'8%', marginTop:'4%'}}>
      <FontAwesome
        name='user-circle'
        size={30}
        color={buttoncolor}/>
    </TouchableOpacity>
    </View>
    {isExpanded && 
    <View className='-mt-[17%] justify-between flex-row mx-[35%]'> 
      <Ionicons 
        name='nutrition'
        size={30}
        color={buttoncolor}/>
      <Ionicons 
        name='receipt-outline'
        size={30}
        color={buttoncolor}/>
    </View>
      }
   </View>
  );
}