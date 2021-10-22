import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RadioButton } from 'react-native-paper'


const RadioButtonsComponent = (props) => {
    return (
        <View style={{flexDirection: "column", flex: 1}}>
            <ScrollView>
            {
                props.listItem.map(
                    (item) => 
                    <TouchableOpacity 
                        style={[
                            styles.background, 
                            styles.center, 
                            props.checked === item.key ? styles.backgroundActive : styles.backgroundInactive
                        ]} 
                        key={item.key}
                        activeOpacity={0.8}
                        onPress={() => props.callback(item.key)}
                    >
                        <View style={styles.radio}>
                            <RadioButton 
                                uncheckedColor="#ffffff"
                                color="#ffffff"
                                value={item.key}
                                status={props.checked === item.key ? "checked" : "unchecked"}
                            />
                        </View>
                        <Text style={[styles.radioLabel]}>{item.label}</Text>
                    </TouchableOpacity>
                )
            }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundActive:{
        backgroundColor: "#ca6ef5"
    },
    backgroundInactive:{
        backgroundColor: "#7c589a"
    },
    background:{
        flexDirection:"row",
        margin : 16,
        padding : 10,
        borderRadius : 15,
        justifyContent : "space-around"
    },

    center:{
        justifyContent:"center",
        alignItems:"center"
    },
    radio:{
        color: "#0e0e0e",
        flex : 1
    },
    radioLabel:{
        fontSize: 15,
        fontWeight: "bold",
        color: "#ffffff",
        flexWrap: "wrap",
        flex : 7
    }
})


export default RadioButtonsComponent