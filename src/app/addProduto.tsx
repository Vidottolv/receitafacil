import { ScrollView, Text, View } from 'react-native';
import InputData from './components/inputData';
import CheckBox from 'react-native-check-box'
import { useEffect, useState } from 'react';
import Button from './components/button';
import ProductQuantityModal from './modal/ProductQty';
import { useQtyStore } from './store/qtyStore';

interface Component {
  id: number;
  name: string;
}

export default function AdicionarProduto() {
  const [checkProduto, setCheckProduto] = useState(false);
  const [checkGrupo, setCheckGrupo] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [components, setComponents] = useState<Component[]>([]);
  const { QtyProd } = useQtyStore();

  const handleCheckGrupo = () => {
      setCheckProduto(false);
      setCheckGrupo(true);
      setIsModalVisible(true);
    }

  const handleCheckProduto = () => {
      setCheckProduto(true);
      setCheckGrupo(false);
      setIsModalVisible(false);
    }

  const handleSetComponents = () => {
    const newComponents = Array.from({ length: QtyProd }, (_, index) => ({
      id: index,
      name: `Produto - ${index + 1}`,
    }));
    setComponents(newComponents);
    console.log(newComponents)
  };

  useEffect(() => {
    handleSetComponents()
  },[QtyProd])
  
 return (
    <View className={`bg-[#1e2022] w-full h-full items-center flex-1`}>
      <View className='h-[10%] w-full items-center justify-evenly flex-row'>
        <View className='flex-row w-[50%] items-center justify-center'>
          <CheckBox
            onClick={() => handleCheckProduto()}
            isChecked={checkProduto}
            checkBoxColor="#FBFAF7"/>
            <Text 
              className='color-[#FBFAF7]' 
              style={{fontFamily:'Itim'}}>
                Produto Simples
            </Text>
        </View>
        <View className='flex-row w-[50%] items-center justify-center'>
          <CheckBox
            onClick={() => handleCheckGrupo()}
            isChecked={checkGrupo}
            checkBoxColor="#FBFAF7"/>
            <Text 
              className='color-[#FBFAF7]'
              style={{fontFamily:'Itim'}}>
                Grupo de Produtos
            </Text>
        </View>
      </View>
     {checkProduto && (
        <View className='w-[90%] justify-center items-center h-full'>
        <ScrollView className='h-full '>
          <InputData
            title="Nome do Produto"
            size="Small"
            placeholder="produto"
            type='input'/>
          <InputData
            title="Unidade de Medida (Kg/Lt/Gr/Ml/Un)"
            size="Small"
            placeholder="unidade"
            type='input'/>
          <InputData
            title="Quantidade da Embalagem"
            size="Small"
            placeholder="quantidade"
            type='input'/>
          <InputData
            title="Preço do Produto"
            size="Small"
            placeholder="preço"
            type='input'/>
          <View className='items-center'>
            <Button
              margin='yes'
              size='Large'
              sizeTitle='Medium'
              title='Adicionar'
              action={() => console.log('alo')}/>
          </View>
          <View className='h-16 w-full'/>
        </ScrollView>
      </View>
     )}

     {checkGrupo && (
      components.map((components) => (
        <View
          key={components.id}
        style={{
          padding: 15,
          marginVertical: 10,
          borderWidth: 1,
          borderRadius: 10,
        }}>
          <Text>
            {components.name}
          </Text>
        </View>
      ))
     )}
      {isModalVisible && (
        <ProductQuantityModal
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      )}
    </View>
  );
}