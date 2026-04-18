import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Animated, Button, Pressable } from 'react-native';
import React, { useRef, useState } from 'react'

import Header from '../Header/index';

export default function Agendamento() {
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

  const [atvName, setAtvName] = useState(null)
  const [data, setData] = useState(null)
  const [atvDesc, setAtvDesc] = useState(null)

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
    console.log(diasStr)
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
      <Animated.View style={[styles.container, createAnimatedStyle(borderAnim2)]}>
        <TextInput
          style={styles.input}
          placeholder="Data: dd-mm-aaaa"
          onFocus={() => animateBorder(borderAnim2, 1)}
          onBlur={() => animateBorder(borderAnim2, 0)}
          onChangeText={setData}
        />
      </Animated.View>

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
      <Button
        title='testar'
        onPress={CreateDaysList}


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


