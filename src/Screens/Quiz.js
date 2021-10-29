import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, Text, StyleSheet, Button } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import SubmitButtonComponent from '../components/atoms/SubmitButton'
import RadioButtonsComponent from '../components/molecules/RadioButtons'
import RetrieveQuestion from '../Services/QuizService'
import { useDispatch, useSelector } from 'react-redux';
import {currentScore,addScoreWhenCorrect,resetScore} from '../Store/Reducers/ScoreReducer'
import ModalComponent from '../components/molecules/Modal'
import { profileHighScore ,setHighScore } from '../Store/Reducers/ProfileReducer'
import { CommonActions } from '@react-navigation/routers'

const RealQuizScreen = ({ navigation }) => {
    const [question, setQuestion] = useState("")
    const [answers, setAnswers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [checked, setChecked] = useState("")
    const [correct, setCorrect] = useState("")
    const [quizCurrentScore, setQuizCurrentScore] = useState(0)
    const [correctModalVisible, setCorrectModalVisible] = useState(false)
    const [wrongModalVisible, setWrongModalVisible] = useState(false)

    const quiz_currentScore = useSelector(currentScore)
    const user_highestScore = useSelector(profileHighScore)
    const dispatch = useDispatch();

    const addScoreWhenCorrectQuiz = () =>{
        dispatch(addScoreWhenCorrect())
    }

    const resetScoreQuiz = () =>{
        dispatch(resetScore())
    }

    const nextQuestion = () =>{
        addScoreWhenCorrectQuiz()
        navigation.dispatch(CommonActions.reset({
            index:0,
            routes:[
                {name:'RealQuiz'}
            ]
        }));
        // navigation.push('RealQuiz')
    }
    const retryQuiz = () =>{
        resetScoreQuiz();
        navigation.dispatch(CommonActions.reset({
            index:0,
            routes:[
                {name:'RealQuiz'}
            ]
        }));
        // navigation.push('RealQuiz')
    }
    const exitQuiz = () =>{
        resetScoreQuiz();
        navigation.dispatch(CommonActions.reset({
            index:0,
            routes:[
                {name:'Profile'}
            ]
        }));
    }

    useEffect(() => {
        setQuizCurrentScore(quiz_currentScore)
        setCorrectModalVisible(false)
        setWrongModalVisible(false)
        async function fetchData() {
            const quizData = await RetrieveQuestion()
            //setup question
            setQuestion(quizData.question)

            //setup multiple answer
            var answerData = []
            if (quizData.answers.answer_a != null) {
                answerData.push({
                    key: "a",
                    label: quizData.answers.answer_a
                })
            }
            if (quizData.answers.answer_b != null) {
                answerData.push({
                    key: "b",
                    label: quizData.answers.answer_b
                })
            }
            if (quizData.answers.answer_c != null) {
                answerData.push({
                    key: "c",
                    label: quizData.answers.answer_c
                })
            }
            if (quizData.answers.answer_d != null) {
                answerData.push({
                    key: "d",
                    label: quizData.answers.answer_d
                })
            }
            if (quizData.answers.answer_e != null) {
                answerData.push({
                    key: "e",
                    label: quizData.answers.answer_e
                })
            }
            if (quizData.answers.answer_f != null) {
                answerData.push({
                    key: "f",
                    label: quizData.answers.answer_f
                })
            }
            setAnswers(answerData)

            //setup correct answer
            //setCorrect("a")
            if (quizData.correct_answers.answer_a_correct == "true") {
                setCorrect("a")
            }
            else if (quizData.correct_answers.answer_b_correct == "true") {
                setCorrect("b")
            }
            else if (quizData.correct_answers.answer_c_correct == "true") {
                setCorrect("c")
            }
            else if (quizData.correct_answers.answer_d_correct == "true") {
                setCorrect("d")
            }
            else if (quizData.correct_answers.answer_e_correct == "true") {
                setCorrect("e")
            }
            else if (quizData.correct_answers.answer_f_correct == "true") {
                setCorrect("f")
            }
        }
        fetchData().then(() => {
            setIsLoading(false)
        })
    }, [])

    const SubmitAnswer = () => {
        if (checked == correct) {
            setCorrectModalVisible(true)
            //navigation.push('RealQuiz')
        } else {
            setWrongModalVisible(true)
            //navigation.push('RealQuiz')
            if(quizCurrentScore > user_highestScore){
                dispatch(setHighScore(quizCurrentScore))
            }
        }
    }

    return (
        <SafeAreaView style={[styles.background]}>
            {
                isLoading ?
                    <View style={[styles.center, styles.fill]}>
                        <ActivityIndicator color="#7c589a" size="large" />
                    </View>
                    :

                    <View style={[styles.fill]}>
                        <ModalComponent isCorrect={true} setModalVisible={setCorrectModalVisible} modalVisible={correctModalVisible} nextQuestion={nextQuestion}></ModalComponent>
                        <ModalComponent isCorrect={false} setModalVisible={setWrongModalVisible} modalVisible={wrongModalVisible} retryQuiz={retryQuiz} exitQuiz={exitQuiz}></ModalComponent>
                        <Text style={[styles.questionText]}>{question}</Text>
                        <RadioButtonsComponent listItem={answers} checked={checked} callback={setChecked} />
                        <View style={{ alignItems: "center",justifyContent: "space-between", flexDirection: "row" }} >
                            <Text style={styles.scoreText}>{quizCurrentScore}</Text>
                            <SubmitButtonComponent callback={SubmitAnswer} />
                        </View>
                    </View>
            }
        </SafeAreaView>
    )
}

const Stack = createNativeStackNavigator()

const QuizScreen = () => {
    return (
        <Stack.Navigator initialRouteName="RealQuiz" screenOptions={{ headerShown: false, headerLeft:null }}>
            <Stack.Screen name="RealQuiz" component={RealQuizScreen} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    fill: {
        flex: 1
    },

    background: {
        flex: 1,
        backgroundColor: "#ffffff"
    },

    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    questionText: {
        margin: 16,
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff",
        backgroundColor: "#7c589a",
        padding: 16,
        borderRadius: 20
    },
    scoreText:{
        margin: 16,
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff",
        backgroundColor: "#7c589a",
        padding: 16,
        borderRadius: 20
    }
})

export default QuizScreen