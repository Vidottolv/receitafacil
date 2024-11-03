import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

interface Props {
    border: 'solid' | 'transparent';
    itemsData: any[];
}


export default function DatePicker({border, itemsData}:Props) {
    const solid = 'w-[30%] h-16 border border-[#FBFAF7] rounded-3xl';
    const transparent = 'w-[30%] h-16';
    return (
        <View className={border === 'solid' ? solid : transparent}>
            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={itemsData}
                style={{
                    inputAndroid: {
                        color:'#FBFAF7',
                    },
                    
                }}
            />
        </View>
  );
}