import { NavigationContainer } from '@react-navigation/native'
import React ,{useEffect, useState }from 'react'
import { Button, View, SafeAreaView, Text, TextInput,Dimensions, StyleSheet,Pressable } from 'react-native'
import RouteName from '../Routes/RouterName'
import Route from '../Routes/Router'
const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;


const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout( () => {
            navigation.navigate(RouteName.Home);
        }, 5000);
    }, [navigation]);

    return (
        <SafeAreaView style={[styles.background, styles.fill]}>
            <View style={styles.center, styles.title}>
                <Text style={styles.center, styles.titleText}>Quiz App</Text>
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
    titleText: {
        fontSize: 32,
        textAlign: "center",
        width: "100%",
        color: "black",
        fontWeight: "bold"
    },
    title: {
        width: 0.4*vw,
        height: 0.2*vh,
        marginTop: 0.5*vh-(0.2*vh)/2,
        marginLeft: 0.5*vw-(0.4*vw)/2,
        paddingTop: ((0.2*vh)/2)-((0.2*vh)/2)/2
    },
    background: {
        backgroundColor: "#F194FF"
    }
})

export default SplashScreen