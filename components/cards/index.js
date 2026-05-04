import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React from "react";
import NormalCard from './NormalCard'
import ExpandedCard from './ExpandedCard'
import {useSQLiteContext} from "expo-sqlite";

export default function Card({isExpanded, onToggle,color,item,atualizarLista, secondColor, cardTitle, cardDescription}) {
    // const [expanded, setExpanded] = React.useState(true);
    const db = useSQLiteContext();

    const concluirTarefa = async () => {
        try {
            // 1. Altera no banco de dados
            await db.runAsync(
                'UPDATE atividades SET concluida = 1 WHERE id = ?',
                [item.id]
            );

            // 2. A MÁGICA: Chama a função que veio lá da MainScreen
            // Isso vai disparar o setDados e a tela vai atualizar sozinha!
            atualizarLista();

            Alert.alert("Sucesso", "Tarefa concluída!");
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <View>
            {isExpanded ? (
                <ExpandedCard color={color}
                              secondColor={secondColor}
                    // expand={expanded}
                    // funcaoSet={setExpanded}
                              cardTitle={cardTitle}
                              cardDescription={cardDescription}
                              onPress={onToggle}
                              atualizarLista={concluirTarefa}


            />) : <NormalCard color={color}
                secondColor={secondColor}
                // expand={expanded}
                // funcaoSet={setExpanded}
                cardTitle={cardTitle}
                onPress={onToggle}

            />}


        </View>
        // <View style={[styles.container,{backgroundColor: color} ]}>
        //
        //
        //     <View style={styles.header}>
        //         <Text style={styles.data}>nome da atv</Text>
        //         <TouchableOpacity
        //             style={[styles.button, {height: 500}]}
        //             >
        //             <Text style={styles.plus}></Text>
        //         </TouchableOpacity>
        //
        //     </View>
        // </View>
    );
}

