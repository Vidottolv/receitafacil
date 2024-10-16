import { View, TouchableOpacity, Pressable } from 'react-native';
import Title from './title';

interface Props {
    size: 'Small' | 'Medium' | 'Large';
    title: string;
    sizeTitle: 'Small' | 'Medium' | 'Large';
}


export default function Button({ size, title, sizeTitle }:Props) {
    const sizeButton = {
        Small: 'w-1/3',
        Medium: 'w-2/3',
        Large:'w-4/5'
    }
 return (
    <Pressable 
        className={`${sizeButton[size]} border border-[#FBFAF7] bg-[#A2B1B7] h-14 mt-8 rounded-3xl flex items-center justify-center`}
        onPress={() => console.log('teste')}>  
      {/* <Pressable> */}
        <Title
            size={sizeTitle}
            title={title}
            />
      {/* </Pressable> */}
    </Pressable>
  );
}



// className={`${sizeButton[size]} border border-[#FBFAF7] bg-[#A2B1B7] h-14 mt-8 rounded-3xl flex items-center justify-center`}