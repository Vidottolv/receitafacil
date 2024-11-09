import { Alert, ScrollView, Text, View } from 'react-native';
import Title from './components/title';
import InputData from './components/inputData';
import Button from './components/button';
import { useState } from 'react';
import api from './store/apiConfig';
import { useNavigation } from 'expo-router';
import { useToast } from 'react-native-toast-notifications';
import { useUserStore } from './store/userStore';

export default function RegisterUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();
  const toast = useToast();
  const { setUser } = useUserStore();

  const handleRegister = async () => {
    const userDTO = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      confirmPassword: confirmPassword
    };
    
    try {
      const response = await api.post('/user', userDTO);
      toast.show(`Sucesso, ${name}! ${response.data.message}`, {
        placement:'top',
        duration:1999,
        type:'success'
      });
      
      setUser(name); // Atualiza o usuário somente após o cadastro bem-sucedido

      setTimeout(() => {
        navigation.navigate("Home");
      }, 2000);
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Erro desconhecido';
      toast.show(`${errorMessage}`, {
        placement:'top',
        duration:2000,
        type:'warning'
      });
    }
  };

  return (
    <View className='h-full w-full flex-1 bg-[#1E2022] justify-center items-center'>
      <View className="w-10/12 h-5/6">
        <Title
          size='Large'
          title='Crie sua conta'/>
        <Title
          size='Medium'
          title='e nunca mais sofra com seus preços!'/>
        <ScrollView>
          <View className="items-center justify-center mt-6">
            <InputData
              title="Seu nome"
              size="Small"
              placeholder="insira seu nome"
              type='input'
              onChange={setName}/>
            <InputData
              title="Seu email"
              size="Small"
              placeholder="seuemail@dominio.com"
              type='input'
              onChange={setEmail}/>
            <InputData
              title="Seu telefone"
              size="Small"
              placeholder="(00)00000-0000"
              type='input'
              onChange={setPhone}/>
            <InputData
              title="Senha"
              size="Small"
              placeholder="**********"
              showIcon={true}
              type='password'
              onChange={setPassword}/>  
            <InputData
              title="Confirme sua senha"
              size="Small"
              placeholder="**********"
              showIcon={true}
              type='password'
              onChange={setConfirmPassword}/> 
            <Button
              size="Large"
              title="Criar"
              sizeTitle="Medium"
              margin='yes'
              action={() => handleRegister()}/>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
