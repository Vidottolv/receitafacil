import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Title from '../components/title';
import InputData from '../components/inputData';
import Button from '../components/button';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

export default function ProductQuantityModal({ isVisible, onClose }: Props) {
  const [quantity, setQuantity] = React.useState(0);

  const handleClose = () => {
    onClose();
  };

  if (!isVisible) return null;

  return (
    <View style={styles.background}>
        <View className='h-2/3 w-[90%] border-[#FBFAF7] border-2 rounded-2xl bg-[#1E2022]'>
            <View className='justify-center items-end h-[10%]'>
                <TouchableOpacity  
                    onPress={() => handleClose()}>
                    <Ionicons 
                        className='mr-4' 
                        name='close' 
                        size={35} 
                        color='#FBFAF7'/>
                </TouchableOpacity>
            </View>
            <View className='items-center h-[50%]'>
                <View 
                    className='w-3/4 items-center'>
                    <Title
                        size='SubLarge'
                        title='Qual a quantidade de produtos a inserir?'/>
                </View>
                <View className='w-2/3 items-center'>
                    <InputData
                        placeholder='1'
                        size='Small'
                        title=''
                        type='input'
                        />
                </View>
            </View>
            <View className='items-center'>
                <Button
                    margin='yes'
                    size='Medium'
                    sizeTitle='Medium'
                    title='Inserir'
                    action={() => console.log('opa')}/>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    background: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
})  