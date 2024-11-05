import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

interface Props {
    border: 'solid' | 'transparent';
    itemsData: any[];
}


export default function DataSelector({border, itemsData}:Props) {
    const solid = 'w-[35%] h-16 border border-[#FBFAF7] rounded-3xl';
    const transparent = 'w-[35%] h-16';
    return (
        <View className={border === 'solid' ? solid : transparent}>
            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={itemsData}
                style={{
                    inputAndroid: {
                        color:'#FBFAF7',
                        fontSize: 16,          
                        paddingVertical: 10,   
                        paddingHorizontal: 8,  
                        height: 50,            
                        justifyContent: 'center',
                    },
                    placeholder: {
                        // color: '#FBFAF7',
                        fontSize: 16,        
                    },
                }}
                placeholder={{
                    label: "Selecione",
                    value: null,
                    // color: '#FBFAF7',                    
                }}
            />
        </View>
  );
}