import {Button, View, Pressable} from "react-native";
import React, { useRef, useState } from 'react'

export default function Repetir(){
    const [ativo, setAtivo] = useState(false);
    const [seg, setSeg] = useState(false);
    const [ter, setTer] = useState(false);
    const [qua, setQua] = useState(false);
    const [qui, setQui] = useState(false);
    const [sex, setSex] = useState(false);
    const [sab, setSab] = useState(false);
    const [dom, setDom] = useState(false);

    const diasVar = [seg, ter, qua, qui, sex, sab, dom];
    const diasStr = [];

    function CreateDaysList() {
        if (diasVar[0] === true) {
            diasStr.push('seg')
        } if (diasVar[1] === true) {
            diasStr.push('ter')
        } if (diasVar[2] === true) {
            diasStr.push('qua')
        } if (diasVar[3] === true) {
            diasStr.push('qui')
        } if (diasVar[4] === true) {
            diasStr.push('sex')
        } if (diasVar[5] === true) {
            diasStr.push('sab')
        } if (diasVar[6] === true) {
            diasStr.push('dom')
        }
    }
    return (
        <View style={styles.container}>
        <View style={styles.repeatView}>

            <Text
                style={styles.inputRep}
                placeholder="Repetir?"
            >Repetir?</Text>

            <Pressable
                style={[
                    styles.button,
                    { backgroundColor: ativo ? '#f57b60' : '#4A90E2' }

                ]}
                onPress={() => setAtivo(!ativo)} // alterna o estado
            >
                <Text style={styles.text}>
                    {ativo ? 'NÃO' : 'SIM'}
                </Text>
            </Pressable>
        </View>

    {/* BOTOES COM OS DIAS */}
    <View style={styles.daysView}>
        {ativo && (

            <Pressable
                style={[
                    styles.buttonDays,
                    { backgroundColor: seg ? '#4ae25e' : 'white' }

                ]}
                onPress={() => setSeg(!seg)} // alterna o estado
            >
                <Text style={styles.text}>
                    {seg ? 'SEG' : 'SEG'}
                </Text>
            </Pressable>
        )}
        {ativo && (

            <Pressable
                style={[
                    styles.buttonDays,
                    { backgroundColor: ter ? '#4ae25e' : 'white' }

                ]}
                onPress={() => setTer(!ter)} // alterna o estado
            >
                <Text style={styles.text}>
                    {ter ? 'TER' : 'TER'}
                </Text>
            </Pressable>
        )}
        {ativo && (

            <Pressable
                style={[
                    styles.buttonDays,
                    { backgroundColor: qua ? '#4ae25e' : 'white' }

                ]}
                onPress={() => setQua(!qua)} // alterna o estado
            >
                <Text style={styles.text}>
                    {ter ? 'QUA' : 'QUA'}
                </Text>
            </Pressable>
        )}
        {ativo && (

            <Pressable
                style={[
                    styles.buttonDays,
                    { backgroundColor: qui ? '#4ae25e' : 'white' }

                ]}
                onPress={() => setQui(!qui)} // alterna o estado
            >
                <Text style={styles.text}>
                    {qui ? 'QUI' : 'QUI'}
                </Text>
            </Pressable>
        )}
        {ativo && (

            <Pressable
                style={[
                    styles.buttonDays,
                    { backgroundColor: sex ? '#4ae25e' : 'white' }

                ]}
                onPress={() => setSex(!sex)} // alterna o estado
            >
                <Text style={styles.text}>
                    {sex ? 'SEX' : 'SEX'}
                </Text>
            </Pressable>
        )}
        {ativo && (

            <Pressable
                style={[
                    styles.buttonDays,
                    { backgroundColor: sab ? '#4ae25e' : 'white' }

                ]}
                onPress={() => setSab(!sab)} // alterna o estado
            >
                <Text style={styles.text}>
                    {sab ? 'SAB' : 'SAB'}
                </Text>
            </Pressable>
        )}
        {ativo && (

            <Pressable
                style={[
                    styles.buttonDays,
                    { backgroundColor: dom ? '#4ae25e' : 'white' }

                ]}
                onPress={() => setDom(!dom)} // alterna o estado
            >
                <Text style={styles.text}>
                    {dom ? 'DOM' : 'DOM'}
                </Text>
            </Pressable>
        )}
    </View>
    )
}