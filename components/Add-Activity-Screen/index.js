import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Animated, Button, Pressable, Alert } from 'react-native';
import React, { useRef, useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import Data from './data'
import Header from '../Header/index';


import { useSQLiteContext } from 'expo-sqlite';



export default function Agendamento() {
  let titleBool = false
  let descriptionBool = false

  function checkTitle(title) {
    if (title !== '') {
      titleBool = true;
    }
  }
  function checkDesc(description) {
    if (description !== '') {
      descriptionBool = true;
    }
  }


  const db = useSQLiteContext();
  const addItem = async (titulo, descricao, data) => {
    checkTitle(atvName)
    checkDesc(descricao)
    if (titleBool && descriptionBool) {
      try {
        const resultado = await db.runAsync(
            'INSERT INTO atividades (nome, data, descricao) VALUES (?, ?, ?)',
            [atvName, dataSql, atvDesc]
        );

        Alert.alert("Sucesso", "Atividade salva com sucesso!");

      } catch (e) {
        console.error(e);
      }
    } else {
      Alert.alert("Erro", "Preencha todos os campos!");
    }
  }




  const borderAnim1 = useRef(new Animated.Value(0)).current;
  const borderAnim2 = useRef(new Animated.Value(0)).current;
  const borderAnim3 = useRef(new Animated.Value(0)).current;
  const borderAnim4 = useRef(new Animated.Value(0)).current;
  const borderAnim5 = useRef(new Animated.Value(0)).current;

  const animateBorder = (anim, toValue) => {
    Animated.timing(anim, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const createAnimatedStyle = (anim) => ({
    borderWidth: anim.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 4],
    }),
    borderRadius: anim.interpolate({
      inputRange: [0, 1],
      outputRange: [4, 12],
    }),
    borderColor: '#4A90E2',
  });

  const [atvName, setAtvName] = useState('')
  const [atvDesc, setAtvDesc] = useState('')
  const [dataFinal, setDataFinal] = useState('')
  const [dataSql, setDataSql] = useState('')

  function printar() {
    console.log(atvName);
    console.log(atvDesc);
    console.log(dataFinal)
    console.log(dataSql)
  }

  return (
    <View style={{ padding: 16 }}>
      {/* Primeiro input */}
      <Animated.View style={[styles.container, createAnimatedStyle(borderAnim1)]}>
        <TextInput
          style={styles.input}
          placeholder="Nome da Atividade"
          onFocus={() => animateBorder(borderAnim1, 1)}
          onBlur={() => animateBorder(borderAnim1, 0)}
          onChangeText={setAtvName}
        />
      </Animated.View>

      {/* Segundo input */}
      {/*<Animated.View style={[styles.container, createAnimatedStyle(borderAnim2)]}>*/}
      {/*  <TextInput*/}
      {/*    style={styles.input}*/}
      {/*    placeholder="Data: dd-mm-aaaa"*/}
      {/*    onFocus={() => animateBorder(borderAnim2, 1)}*/}
      {/*    onBlur={() => animateBorder(borderAnim2, 0)}*/}
      {/*    onChangeText={setData}*/}
      {/*  />*/}
      {/*</Animated.View>*/}

      {/* <Animated.View style={[styles.container, createAnimatedStyle(borderAnim3)]}>
        <TextInput
          style={styles.input}
          placeholder="Tempo Reservado"
          onFocus={() => animateBorder(borderAnim3, 1)}
          onBlur={() => animateBorder(borderAnim3, 0)}
          onChangeText={}
        />
      </Animated.View> */}

      <Animated.View style={[styles.container, createAnimatedStyle(borderAnim4)]}>
        <TextInput
          style={styles.inputDesc}
          placeholder="Descreva a Atividade"
          multiline={true}
          onFocus={() => animateBorder(borderAnim4, 1)}
          onBlur={() => animateBorder(borderAnim4, 0)}
          onChangeText={setAtvDesc}
        />
      </Animated.View>
      <Data onSelect={(valor) => setDataFinal(valor)}
            onSql={(valor2) => setDataSql(valor2)}/>

      <Button
        title='Adicionar Atividade'
        onPress={addItem}
        //   onPress={printar}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginVertical: 15,
  },
  input: {
    fontSize: 16,
    padding: 8,
  },
  inputDesc: {
    fontSize: 16,
    padding: 8,
    height: 200,
    textAlignVertical: 'top',
  },
  inputRep: {
    fontSize: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#4A90E2',
    width: 150,
    textAlign: 'center',
    borderRadius: 3
  },
  repeatView: {
    flexDirection: 'row',
  },
  daysView: {
    flexDirection: 'row',
    marginTop: 20,
  },
  days: {
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    marginLeft: 20,
    padding: 15
  },
  buttonDays: {
    marginRight: 5,
    padding: 7,
    borderWidth: 1,
    borderColor: '#4A90E2',
  }
});





