import React from 'react'
import {View, SafeAreaView, Text, StyleSheet} from 'react-native'
const AboutScreen = () => {
    return (
        <SafeAreaView style={[styles.fill]}>
            <View style={[styles.fill, styles.center]}>
                <Text style={[styles.defatultTitle]}>This application is created by:</Text>
                <Text style={[styles.defaultText]}>- Cornelius Tantius</Text>
                <Text style={[styles.defaultText]}>- Eric Jonson</Text>
                <Text style={[styles.defaultText]}>- Limas Jaya Akeh</Text>
                <Text style={[styles.defaultText]}>- Mohammad Syarif Ardi Nugroho</Text>
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
    defatultTitle:{
        margin:8,
        fontSize:24
    },
    defaultText:{
        margin:2,
        fontSize:16
    }
})

export default AboutScreen