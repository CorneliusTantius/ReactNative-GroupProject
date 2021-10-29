import React ,{useEffect, useState }from 'react'
import { Button, View, SafeAreaView, Text, TextInput,Dimensions, StyleSheet,Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {resetScore} from '../Store/Reducers/ScoreReducer'
import { profileUserName, setUserName } from '../Store/Reducers/ProfileReducer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RouteName from '../Routes/RouterName'
const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const Stack = createNativeStackNavigator()
const RealHomeScreen = ({navigation}) => {
    const [userName, setThisUserName] = useState('No Name')
    const [errorMessage, setErrorMessage] = useState("")


    const profile_userName = useSelector(profileUserName)
    useEffect(() => {
        console.log("effect triggered")
        setThisUserName(profile_userName)
        return () => console.log("effect unmounted")
    }, [profile_userName])
    const dispatch = useDispatch();

    const textInputHandler = (inputValue) => {
        if(inputValue.length < 4){
            setThisUserName(inputValue)
            setErrorMessage("User Name is too short")
            return
        }
        else if(inputValue.length > 20){
            setThisUserName(inputValue)
            setErrorMessage("User Name is too long")
            return
        }
        else{
            setThisUserName(inputValue)
            setErrorMessage("")
            dispatch(setUserName(inputValue))
            return
        }
    }
    const endTextInputHandler = () => {
        let inputValue = userName
        if(inputValue.length < 4){
            setThisUserName(profile_userName)
            setErrorMessage("")
            return
        }
        else if(inputValue.length > 20){
            setThisUserName(profile_userName)
            setErrorMessage("")
            return
        }
    }

    const handleClick = () => {
        console.log('Clicked')
        resetScoreQuiz();
        navigation.navigate(RouteName.Quiz)
    }

    const resetScoreQuiz = () =>{
        dispatch(resetScore())
    }

    return (
        <SafeAreaView style={[styles.fill]}>
            <View style={[styles.fill, styles.center]}>
                {/* <ModalComponent isCorrect={true} setModalVisible={setModalVisible} modalVisible={modalVisible} setCurrentScore={setCurrentScore}></ModalComponent> */}
                {/* <ModalComponent isCorrect={false} setModalVisible={setModalVisible} modalVisible={modalVisible} setCurrentScore={setCurrentScore}></ModalComponent>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => {setModalVisible(true),setScoreHome(20)}}
                >
                    <Text style={styles.textStyle}>Show Modal</Text>
                </Pressable> */}

                <View style={[styles.fill]}>
                    <Text style={[styles.defaultText]}>Name:</Text>
                        <TextInput style={[styles.input]} value={userName} onChangeText={textInputHandler} onBlur={endTextInputHandler}/>
                    <Text>{errorMessage}</Text> 
                    <Button style={[styles.button]} title={'Start Quiz'} onPress={handleClick}/>
                </View>

            </View>
        </SafeAreaView>
    )
}

const HomeScreen = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="RealHome" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="RealHome" component={RealHomeScreen} prop={navigation} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    fill: {
        flex: 1,
        padding:12
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    defaultText: {
        margin: 8,
        fontSize: 20
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        width: 0.7*vw,
        borderRadius:8,
        marginBottom:0.03*vh
    },
})

export default HomeScreen