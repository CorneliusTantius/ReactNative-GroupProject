import React ,{ useEffect, useState }from 'react';
import {  useSelector } from 'react-redux';
import { currentScore} from '../../Store/Reducers/ScoreReducer'
import {  Modal, StyleSheet, Text, Pressable, View} from 'react-native';


const ModalComponent = props => {
    const [modalCurrentScore, setModalCurrentScore] = useState(0);
    const modal_currentScore = useSelector(currentScore);

    useEffect(() => {
        console.log("effect triggered")
        setModalCurrentScore(modal_currentScore)
        return () => console.log("effect unmounted")
    }, [modal_currentScore])

    if (props.isCorrect) {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={() => {
                    props.setModalVisible(!props.modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Correct Answer</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => props.setModalVisible(false),props.nextQuestion}
                        >
                            <Text style={styles.textStyle}>Next Qeustion</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        );
    } else {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={() => {
                    props.setModalVisible(!props.modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Wrong Answer</Text>
                        <Text style={styles.modalText}>Final Achieve Score :</Text>
                        <Text style={styles.modalText}>{modalCurrentScore}</Text>
                        <View style={styles.rowView}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => props.setModalVisible(!props.modalVisible),props.retryQuiz}
                            >
                                <Text style={styles.textStyle}>Retry</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => props.setModalVisible(!props.modalVisible),props.exitQuiz}
                            >
                                <Text style={styles.textStyle}>Exit</Text>
                            </Pressable>
                        </View>

                    </View>
                </View>
            </Modal>
        );

    }s
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    rowView:{
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        flexDirection: 'row'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#ca6ef5",
        margin : 10
    },
    buttonClose: {
        backgroundColor: "#ca6ef5",
        margin : 10
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default ModalComponent;