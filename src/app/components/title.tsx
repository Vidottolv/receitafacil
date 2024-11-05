import { View,Text } from 'react-native';
import { useFontStore } from '../store/fontStore';
import { useEffect } from "react";
import * as Font from 'expo-font';


interface Props {
  title: string;
  size: 'Small' | 'Medium' | 'Large' | 'SubLarge';
}


export default function Title({ title, size }: Props) {

  const { fontsLoaded, setFontsLoaded } = useFontStore();
  
  const textSize = {
    Small: 'text-base', 
    Medium: 'text-2xl',
    SubLarge: 'text-4xl', 
    Large: 'text-5xl',  
  };

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Itim': require('../../../assets/fonts/Itim-Regular.ttf')
      });
      setFontsLoaded(true);
    }
  
    loadFonts();
  }, []);
  
  if (!fontsLoaded) {
    return null;
  }

 return (
    <View>
      <Text className={`${textSize[size]} color-[#FBFAF7]`} style={{ fontFamily: 'Itim' }}>{title}</Text>
    </View>
  );
}