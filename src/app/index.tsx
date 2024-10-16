import { Text, View } from "react-native";
import Title from "./components/title";
import InputData from "./components/inputData";
import Button from "./components/button";


export default function App() {

  return (
    <View className={`bg-[#1E2022] w-full h-full items-center justify-center`}>
      <View className="w-10/12 h-5/6 p-2">
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
            showIcon={true}/>
          <Button
            size="Large"
            title="Login"
            sizeTitle="Medium"/>
          <View className="flex-row">
            <Button 
              size="Small"
              title="Cadastre-se"
              sizeTitle="Small"/>
              <View className="space-x-4"/>
            <Button 
              size="Small"
              title="Recuperar Senha"
              sizeTitle="Small"/>
          </View>
        </View>
      </View>
    </View>
  );
}
