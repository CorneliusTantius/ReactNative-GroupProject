import React, { useEffect, useState } from 'react'
import {View, SafeAreaView, Text, StyleSheet, Button} from 'react-native'
import RadioButtonsComponent from '../components/molecules/RadioButtons'
import RetrieveQuestion from '../Services/QuizService'

const QuizScreen = () => {
    const [question, setQuestion] = useState("")
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        async function fetchData() {
            const quizData = await RetrieveQuestion()
            setQuestion(quizData.question)
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
            console.log(answerData)
            setAnswers(answerData)
        }
        fetchData()
    }, [])

    return (
        <SafeAreaView>
            {
                // isLoading ?
                // <View style={[styles.center]}>
                //     <Text style={[styles.questionText]}>Hello Wa</Text>
                // </View>
                // : 
                
                <View style={[styles.center]}>
                    <Text style={[styles.questionText]}>{question}</Text>
                    <RadioButtonsComponent listItem={answers} />
                </View>
            }

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
    questionText:{
        margin:8,
        fontSize:24,
        fontWeight: "bold",
        color: "#0e0e0e"
    }
})

export default QuizScreen