import React, { useState } from 'react';
import { View, Text, Pressable, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Data({onSelect, onSql}) {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Selecionar data');
    const [sqlDate, setSqlDate] = useState('');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios'); // No iOS o picker pode ficar aberto; no Android ele fecha ao selecionar
        setDate(currentDate);

        // Formata a data para exibir no "campo"
        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setText(fDate);


        let sqld = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate();
        setSqlDate(sqld);

        if(onSelect) onSelect(fDate);
        if (onSql) onSql(sqld);
    };



    return (
        <View style={{ padding: 10, marginTop: 10 }}>
            {/* "Input" falso que dispara o calendário */}
            <Pressable onPress={() => setShow(true)} style={{
                borderWidth: 1, padding: 15, borderRadius: 5, borderColor: '#4A90E2'
            }}>
                <Text>{text}</Text>
            </Pressable>

            {show && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default" // Pode ser 'spinner', 'calendar' ou 'default'
                    onChange={onChange}
                />
            )}
        </View>
    );
}
