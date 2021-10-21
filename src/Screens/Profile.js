import React, { useEffect, useState } from 'react'
import {View, SafeAreaView, Text, StyleSheet, TextInput, Dimensions, ScrollView} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { profileUserName, profileHighScore, setUserName } from '../Store/Reducers/ProfileReducer'
import { withNavigationFocus } from 'react-navigation';

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const ProfileScreen = () => {
    const [userName, setUserName] = useState('No Name') // get name from store
    const [userScore, setUserScore] = useState(0)
    const [errorMessage, setErrorMessage] = useState("")
    
    const profile_userName = useSelector(profileUserName)
    const profile_highScore = useSelector(profileHighScore)
    useEffect(() => {
        console.log("effect triggered")
        setUserName(profile_userName)
        setUserScore(profile_highScore)

        return () => console.log("effect unmounted")
    }, [profile_userName, profile_highScore])

    

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
            useDispatch(setUserName(inputValue))
        }
    }
    const endTextInputHandler = () => {
        let inputValue = userName
        if(inputValue.length < 4){
            setUserName(profile_userName)
            setErrorMessage("")
            return
        }
        else if(inputValue.length > 20){
            setUserName(profile_userName)
            setErrorMessage("")
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
                <TextInput style={[styles.input]} value={userName} onChangeText={textInputHandler} onBlur={endTextInputHandler}/>
                <Text>{errorMessage}</Text> 
                <Text>Current High Score: {userScore}</Text> 
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