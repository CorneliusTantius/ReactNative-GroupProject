import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { RadioButton } from 'react-native-paper'


const RadioButtonsComponent = (props) => {
    return (
        <View style={{flexDirection: "column"}}>
            {
                props.listItem.map(
                    (item) => 
                    <View style={{flexDirection:"row"}} key={item.key}>
                        <RadioButton 
                            value={item.key}
                            status={props.checked === item.key ? "checked" : "unchecked"}
                            onPress={() => props.callback(item.key)}
                        />
                        <Text>{item.label}</Text>
                    </View>
                    
                     
                )
            }
        </View>
    )
}

export default RadioButtonsComponent