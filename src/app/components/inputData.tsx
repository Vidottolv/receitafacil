import { View,Text,TextInput } from 'react-native';
import Title from './title';
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react';

interface Props {
  title: string;
  size: 'Small' | 'Medium' | 'Large';
  placeholder: string;
  showIcon?: boolean;
}

export default function inputData({ title, size, placeholder, showIcon = false }: Props) {
  const [iconVisible, setIconVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  const toggleIcon = () => {
    setIconVisible(!iconVisible);
    setTextVisible(!textVisible);
  }

 return (
  <View className='w-full mt-4'>
    <View className='ml-7 mb-2'>
      <Title 
        title={title}
        size={size}/>
    </View>
    <View className='w-full h-14 border rounded-2xl border-[#FBFAF7] bg-[#616D72] p-2 justify-between flex-row'>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#FBFAF7'}
        style={{fontFamily:'Itim', color:'#FBFAF7'}}
        secureTextEntry={!textVisible}
        /> 
        {showIcon && (
          <Ionicons
            name={iconVisible ? 'eye-sharp' : 'eye-off-sharp'} 
            size={28}
            color="#FBFAF7"
            className="absolute right-3 top-2/3 -translate-y-1/2"
            onPress={toggleIcon} 
          />
        )}
    </View>
  </View>
  );
}