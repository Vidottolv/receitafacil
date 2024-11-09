import { View, TextInput } from 'react-native';
import Title from './title';
import { Ionicons } from '@expo/vector-icons';
import { useLayoutEffect, useState } from 'react';

interface Props {
  title: string;
  size: 'Small' | 'Medium' | 'Large';
  placeholder: string;
  showIcon?: boolean;
  type: 'input' | 'password';
  onChange?: (text: string) => void;
}

export default function InputData({ title, size, placeholder, showIcon = false, type, onChange }: Props) {
  const [textVisible, setTextVisible] = useState(false);

  useLayoutEffect(() => {
    setTextVisible(type === 'input');
  }, [type]);

  const toggleIcon = () => {
    setTextVisible((prev) => !prev);
  };

  return (
    <View className='w-full mt-4'>
      <View className='ml-7 mb-2'>
        <Title title={title} size={size} />
      </View>
      <View className='justify-between flex-row'>
        <TextInput
          className='w-full h-14 border rounded-2xl border-[#FBFAF7] bg-[#616D72] p-4'
          placeholder={placeholder}
          placeholderTextColor={'#FBFAF7'}
          style={{ fontFamily: 'Itim', color: '#FBFAF7' }}
          secureTextEntry={type ==='password' && !textVisible}
          onChangeText={onChange}
        />
        {showIcon && (
          <Ionicons
            name={textVisible ? 'eye-sharp' : 'eye-off-sharp'}
            size={28}
            color="#FBFAF7"
            className="absolute right-3 top-1/2 -translate-y-1/2"
            onPress={toggleIcon}
          />
        )}
      </View>
    </View>
  );
}