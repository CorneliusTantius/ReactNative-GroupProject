import React, { useState } from 'react'
import {View, SafeAreaView, Text, StyleSheet, TextInput, Dimensions} from 'react-native'

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const ProfileScreen = () => {
    const [userName, setUserName] = useState('Eric') // get name from store
    const [errorMessage, setErrorMessage] = useState("")

    const textInputHandler = (inputValue) => {
        if(inputValue.length < 4){
            setUserName(inputValue)
            setErrorMessage("User Name is too short")
            return
        }
        else if(inputValue.length > 20){
            setUserName(inputValue)
            setErrorMessage("User Name is too long")
            return
        }
        else{
            setUserName(inputValue)
            setErrorMessage("")
            // update data di store
            return
        }
    }

    return (
        <SafeAreaView style={[styles.fill]}>
            <View style={[styles.center]}>
                <Text style={[styles.titleText]}>Quiz App</Text>
            </View>
            <View style={[styles.fill, styles.center]}>
                <Text style={[styles.defaultText]}>Name:</Text>
                <TextInput style={[styles.input]} value={userName} onChangeText={textInputHandler}/>
                <Text>{errorMessage}</Text> 
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fill:{
        flex:1
    },
    center:{
        justifyContent:"center",
        alignItems:"center"
    },
    titleText:{
        fontSize: 64,
        marginTop:8,
        fontWeight:"600",
    },
    defaultText:{
        margin:8,
        fontSize:20,
        fontWeight:"400",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 0.7*vw
    },
    div1:{
        backgroundColor:"blue"
    }
})

export default ProfileScreen