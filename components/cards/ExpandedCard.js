import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import React from "react";


export default function ExpandedCard({color,secondColor, expand, funcaoSet,onPress,atualizarLista, cardTitle, cardDescription}) {

    return (
        <View style={[styles.container,{backgroundColor: color} ]}>


            <View style={styles.header}>
                <View style={styles.namedesc}>
                    <Text style={styles.data}>{cardTitle}</Text>
                    <Text style={styles.textdesc}>{cardDescription}</Text>
                    <Button title='OK' onPress={atualizarLista}></Button>
                </View>
                <TouchableOpacity
                    onPress={onPress}
                    style={[styles.button, {height: 500, backgroundColor: secondColor}]}
                >
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: 370,
        borderRadius: 20,
        height: 210,
        overflow: 'hidden',
        position: 'relative',
        top: 0,
    },
    namedesc: {
        flexDirection: 'column',

        justifyContent: 'center',
        paddingHorizontal: 20,
        width: 300



    },
    textdesc: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,

        textAlign: 'center',
        fontSize: 18,
        marginTop: 10,
        height: 120,
    },


    header: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
    },
    data: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,

        textAlign: 'center',
        fontSize: 18
    },
    button: {

        padding: 10,
        // borderRadius: '70%',
        width: 70,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    plus: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 25,

    },
    title: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 10,
    }
});