import { Text, View } from "react-native";
import Title from "./components/title";
import InputData from "./components/inputData";
import Button from "./components/button";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import api from "./store/apiConfig";
import { useToast } from "react-native-toast-notifications";
import { useUserStore } from "./store/userStore";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const toast = useToast();
  const { user, setUser } = useUserStore();

  const handleValidateLogin = async () => {
      const userDTO = {
        email: email,
        password: password,
      }
      // console.log(userDTO);
      try {
        const response = await api.post('/auth', userDTO);
        console.log(response.data.user.name)
        setUser(response.data.user.name)
        toast.show(`Sucesso!`, {
          placement:'top',
          duration:1999,
          type:'success'
        });
        setTimeout(() => {
          navigation.navigate("Home")        
        }, 2000);
      } 
      catch (error: any) {
        const errorMessage = error.response?.data?.message || 'Erro desconhecido';
        toast.show(`${errorMessage}`, {
          placement:'top',
          duration:2000,
          type:'warning'
        })
      }
  };

  return (
    <View className={`bg-[#1E2022] w-full h-full items-center justify-center flex-1`}>
      <View className="w-10/12 h-5/6">
        <Title 
          title="Login"
          size="Large"/>
        <View className="items-center justify-center mt-6">
          <InputData
            title="Email"
            size="Small"
            placeholder="seuemail@dominio.com"
            type="input"
            onChange={setEmail}/>
          <InputData
            title="Senha"
            size="Small"
            placeholder="**********"
            showIcon={true}
            type="password"
            onChange={setPassword}/>
          <Button
            size="Large"
            title="Login"
            sizeTitle="Medium"
            action={() => handleValidateLogin()}/>
          <View className="flex-row gap-10">
            <Button 
              size="Small"
              title="Cadastre-se"
              sizeTitle="Small"
              action={() => navigation.navigate("registerUser")}/>
              <View className="space-x-4"/>
            <Button 
              size="Small"
              title="Recuperar Senha"
              sizeTitle="Small"
              action={() => ""}/>
          </View>
        </View>
      </View>
    </View>
  );
}
