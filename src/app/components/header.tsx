import { Image, Text, TouchableOpacity, View } from 'react-native';
import Title from './title';

export default function HeaderCustom() {
    const username = 'Lucas';
 return (
   <View className='h-[10%] flex-row justify-between p-5 w-full'>
    <Title
        size='Large'
        title={`Olá, ${username}!`}/>
        <TouchableOpacity onPress={() => console.log('clicado')}>
            <Image
                className='h-14 w-14 mr-10 rounded-full'
                source={
                    require('../../../assets/images/DefaultUser.png')
                }/>
        </TouchableOpacity>

   </View>
  );
}