import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { RadioButton } from 'react-native-paper'


const RadioButtonsComponent = (props) => {
    const [checked, setChecked] = useState("")

    return (
        <View style={{flexDirection: "column"}}>
            {
                props.listItem.map(
                    (item) => 
                    <View style={{flexDirection:"row"}}>
                        <RadioButton 
                            value={item.key}
                            status={checked === item.key ? "checked" : "unchecked"}
                            onPress={() => setChecked(item.key)}
                        />
                        <Text>{item.label}</Text>
                    </View>
                    
                     
                )
            }
        </View>
    )
}

export default RadioButtonsComponent