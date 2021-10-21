import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


const SubmitButtonComponent = (props) => {
    return (
        <TouchableOpacity onPress={props.callback} style={{flexDirection:"row"}}>
            <Text>Submit</Text>
            <Icon name="arrow-forward-outline" size={20} color="#0e0e0e"/>
        </TouchableOpacity>
    )
}

export default SubmitButtonComponent