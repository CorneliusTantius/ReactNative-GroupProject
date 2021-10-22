import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


const SubmitButtonComponent = (props) => {
    return (
        <TouchableOpacity onPress={props.callback} style={[styles.submitButton]}>
            <Text style={{color : "#ffffff", fontWeight: "bold"}}>Submit</Text>
            <Icon style={{color : "#ffffff"}} name="arrow-forward-outline" size={20} color="#0e0e0e"/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    submitButton:{
        width: "20%",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#ca6ef5",
        margin : 16,
        padding : 10,
        borderRadius : 10,
    },
    
})

export default SubmitButtonComponent