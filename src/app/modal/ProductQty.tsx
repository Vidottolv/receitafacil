import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Title from '../components/title';
import InputData from '../components/inputData';
import Button from '../components/button';
import { useQtyStore } from '../store/qtyStore';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

export default function ProductQuantityModal({ isVisible, onClose }: Props) {
  const { QtyProd, setQtyProd} = useQtyStore();
  const [qty, setQty] = useState('');

  const handleAdd = () => {
    setQtyProd(Number(qty));
    setTimeout(() => {
        onClose();        
      }, 400);
  };

  useEffect(() => {
    console.log(QtyProd);
  }, [QtyProd]);

  const handleClose = () => {
    onClose();
  };

  if (!isVisible) return null;

  return (
    <KeyboardAvoidingView behavior={undefined} style={styles.background}>
        <View className='h-2/3 w-[90%] border-[#FBFAF7] border-2 rounded-2xl  bg-[#1E2022] overflow'>
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
            <View className='items-center h-[60%] justify-center'>
                <View 
                    className='w-3/4 items-center'>
                    <Title
                        size='SubLarge'
                        title='Qual a quantidade de produtos a inserir?'/>
                </View>
                <View className='w-2/3 items-center -mt-10'>
                    <InputData
                        placeholder='2 ou mais produtos'
                        size='Small'
                        title=''
                        type='input'
                        onChange={setQty}
                        />
                </View>
            </View>
            <View className='items-center'>
                <Button
                    margin='no'
                    size='Medium'
                    sizeTitle='Medium'
                    title='Inserir'
                    action={() => handleAdd()}/>
            </View>
        </View>
    </KeyboardAvoidingView>
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