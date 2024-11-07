import { Text, View } from 'react-native';
import InputData from './components/inputData';
import CheckBox from 'react-native-check-box'
import { useState } from 'react';

export default function AdicionarProduto() {
  const [checkProduto, setCheckProduto] = useState(true);
  const [checkGrupo, setCheckGrupo] = useState(false);

  const handleCheckGrupo = () => {
    setCheckProduto(false)
    setCheckGrupo(!checkGrupo)
  }
  const handleCheckProduto = () => {
    setCheckProduto(!checkProduto)
    setCheckGrupo(false)
  }
  
 return (
    <View className={`bg-[#1e2022] w-full h-full items-center flex-1`}>
      <View className='h-[10%] w-full items-center justify-evenly flex-row'>
        <View className='flex-row w-[50%] items-center justify-center'>
          <CheckBox
            onClick={() => handleCheckProduto()}
            isChecked={checkProduto}
            checkBoxColor="#FBFAF7"/>
            <Text 
              className='color-[#FBFAF7]'>
                Produto Simples
            </Text>
          </View>

          <View className='flex-row w-[50%] items-center justify-center'>
          <CheckBox
            onClick={() => handleCheckGrupo()}
            isChecked={checkGrupo}
            checkBoxColor="#FBFAF7"/>
            <Text 
              className='color-[#FBFAF7]'>
                Grupo de Produtos
            </Text>
          </View>
        </View>

    <View className='w-[90%]'>
      <InputData
        title="Nome do Produto"
        size="Small"
        placeholder="produto"
        type='input'/>
    </View>

   </View>
  );
}