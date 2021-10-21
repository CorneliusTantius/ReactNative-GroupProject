import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { RadioButton } from 'react-native-paper'


const ButtonComponent = (props) => {
    return (
            <TouchableOpacity style={styles.button} onPress={props.onPress}>
                <Text style={styles.buttonText}>{props.label}</Text>
            </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize : 40,
        fontWeight : 'bold',
        color : '#0e0e0e'
    },
    button: {
        padding : 16,
        backgroundColor : '#73eedc',
        borderRadius : 8,
        minWidth : 100,
        justifyContent : 'center',
        alignItems : 'center'
    },
    buttonIncreament: {
        padding : 16,
        backgroundColor : '#73eedc',
        borderRadius : 8,
        minWidth : 100,
        justifyContent : 'center',
        alignItems : 'center'
    },
    buttonDecreament: {
        padding : 16,
        backgroundColor : '#345431',
        borderRadius : 8,
        minWidth : 100,
        justifyContent : 'center',
        alignItems : 'center'
    }
})

export default ButtonComponent