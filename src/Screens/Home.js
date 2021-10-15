import React from 'react'
import {View, SafeAreaView, Text, StyleSheet} from 'react-native'
const HomeScreen = () => {
    return (
        <SafeAreaView style={[styles.fill]}>
            <View style={[styles.fill, styles.center]}>
                <Text style={[styles.defaultText]}>Hello World</Text>
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
    defaultText:{
        margin:8,
        fontSize:20
    }
})

export default HomeScreen