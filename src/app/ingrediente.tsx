import { View, Text } from 'react-native';
import Button from './components/button';
import { useNavigation } from 'expo-router';

export default function Ingrediente() {
  const navigation = useNavigation();
  return (
    <View className={`bg-[#1E2022] w-full h-full items-center justify-center flex-1`}>
      <View className='h-[90%] w-full'>

      </View>
      <View className='h-[10%] w-full items-center justify-center'>
          <Button
            size='Large'
            sizeTitle='Medium'
            title='Adicionar'
            action={() => navigation.navigate('addProduto')}
            margin='no'/>
      </View>
    </View>
  );
}