import { Text, View } from 'react-native';
import Title from './components/title';
import InputData from './components/inputData';
import Button from './components/button';

export default function RegisterUser() {
 return (
  <View className='h-full w-full flex-1 bg-[#1E2022] justify-center items-center'>
    <View className="w-10/12 h-5/6">
      <Title
        size='Large'
        title='Crie sua conta'/>
      <Title
        size='Medium'
        title='e nunca mais sofra com seus preços!'/>
      <View className="items-center justify-center mt-6">
        <InputData
          title="Seu nome"
          size="Small"
          placeholder="insira seu nome"/>
        <InputData
          title="Seu email"
          size="Small"
          placeholder="seuemail@dominio.com"/>
        <InputData
          title="Senha"
          size="Small"
          placeholder="**********"
          showIcon={true}
          visible={false}/>
        <InputData
          title="Confirme sua senha"
          size="Small"
          placeholder="**********"
          showIcon={true}
          visible={false}/>
        <Button
          size="Large"
          title="Criar"
          sizeTitle="Medium"
          action={() => console.log('apertado')}/>
      </View>
    </View>
  </View>
  );
}