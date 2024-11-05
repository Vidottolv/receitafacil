import { View, Text, TouchableOpacity } from 'react-native';
import HeaderCustom from './components/header';
import BottomTab from './components/bottomTab';
import Title from './components/title';
import { Ionicons } from '@expo/vector-icons';
import DataSelector from './components/dataselector';

export default function HomeScreen() {

  const atividades = [
    { label: 'Realizadas', value: '1' },    
    { label: 'Não Realizadas', value: '2' },
    { label: 'Todas', value: '3' },

  ];

 return (
   <View className='bg-[#1E2022] w-full h-full'>
    <View className='h-1/2 p-3'>
      <View className='flex-row justify-between p-2'>
        <Title
          size='SubLarge'
          title='Receitas'
        />
        <TouchableOpacity>
          <Ionicons
            size={35}
            name='add-circle-outline'
            color='#FBFAF7'
            className='mr-5'/>
        </TouchableOpacity>
      </View>
    </View>
    <View className='h-1/2 p-3' >
      <View className='flex-row justify-between p-2'>
        <Title
          size='SubLarge'
          title='Atividades'/>
        <DataSelector 
          border='transparent' 
          itemsData={atividades} />  
      </View>  
      <View className='border h-[75%] mt-1 rounded-2xl border-[#FBFAF7]'>

      </View>
    </View>
   </View>
  );
}