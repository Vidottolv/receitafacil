import { View,Text } from 'react-native';
import { useFontStore } from '../store/fontStore';


interface Props {
  title: string;
  size: 'Small' | 'Medium' | 'Large' | 'SubLarge';
}


export default function Title({ title, size }: Props) {  
  const textSize = {
    Small: 'text-base', 
    Medium: 'text-2xl',
    SubLarge: 'text-4xl', 
    Large: 'text-5xl',  
  };

 return (
    <View>
      <Text className={`${textSize[size]} color-[#FBFAF7]`} style={{ fontFamily: 'Itim' }}>{title}</Text>
    </View>
  );
}