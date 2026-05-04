import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from "react";

export default function NormalCard({color,secondColor, expand, funcaoSet,onPress, cardTitle}) {


    return (
        <View style={[styles.container,{backgroundColor: color} ]}>


            <View style={styles.header}>
                <Text style={styles.data}>{cardTitle}</Text>
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
        height: 110,
        overflow: 'hidden',
        position: 'relative',

        top: 0,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    data: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        flex: 1,
        marginHorizontal: 20,
        textAlign: 'center',
        fontSize: 18
    },
    button: {
        padding: 10,
        // borderRadius: '70%',
        width: 70,
        height: '100%',
        marginLeft: 'auto',



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