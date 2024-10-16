import { Text, View } from "react-native";
import Title from "./components/title";
import InputData from "./components/inputData";
import Button from "./components/button";
import { useNavigation } from "expo-router";


export default function Login() {
  const navigation = useNavigation();
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
            placeholder="seuemail@dominio.com"/>
          <InputData
            title="Senha"
            size="Small"
            placeholder="**********"
            showIcon={true}
            visible={false}/>
          <Button
            size="Large"
            title="Login"
            sizeTitle="Medium"
            action={() => navigation.navigate("Home")}/>
          <View className="flex-row gap-10">
            <Button 
              size="Small"
              title="Cadastre-se"
              sizeTitle="Small"
              action={() => console.log("Cadastre")}/>
              <View className="space-x-4"/>
            <Button 
              size="Small"
              title="Recuperar Senha"
              sizeTitle="Small"
              action={() => console.log("Recup")}/>
          </View>
        </View>
      </View>
    </View>
  );
}
