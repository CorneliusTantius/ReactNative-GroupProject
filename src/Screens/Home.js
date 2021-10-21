import React ,{useState }from 'react'
import { View, SafeAreaView, Text, StyleSheet,Pressable } from 'react-native'
import { useDispatch } from 'react-redux'
import {setScore} from '../Store/Reducers/ScoreReducer'
import ModalComponent from '../components/molecules/Modal'
const HomeScreen = () => {
    const [currentScore, setCurrentScore] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();

    const setScoreHome = (value) =>{
        dispatch(setScore(value))
    }
    return (
        <SafeAreaView style={[styles.fill]}>
            <View style={[styles.fill, styles.center]}>
                {/* <ModalComponent isCorrect={true} setModalVisible={setModalVisible} modalVisible={modalVisible} setCurrentScore={setCurrentScore}></ModalComponent> */}
                <ModalComponent isCorrect={false} setModalVisible={setModalVisible} modalVisible={modalVisible} setCurrentScore={setCurrentScore}></ModalComponent>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => {setModalVisible(true),setScoreHome(20)}}
                >
                    <Text style={styles.textStyle}>Show Modal</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fill: {
        flex: 1
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
    }
})

export default HomeScreen