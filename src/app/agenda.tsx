import { View, Text } from 'react-native';
import DatePicker from './components/datepicker';

export default function Agenda() {
  const meses = [
    { label: 'Jan', value: '1' },    
    { label: 'Fev', value: '2' },
    { label: 'Mar', value: '3' },
    { label: 'Abr', value: '4' },
    { label: 'Mai', value: '5' },
    { label: 'Jun', value: '6' },
    { label: 'Jul', value: '7' },
    { label: 'Ago', value: '8' },
    { label: 'Set', value: '9' },
    { label: 'Out', value: '10' },
    { label: 'Nov', value: '11' },
    { label: 'Dez', value: '12' },
  ];
  return (
    <View className='bg-[#1E2022] w-full h-full justify-center'>
     <DatePicker border='solid' itemsData={meses} />  
    </View>
  );
}