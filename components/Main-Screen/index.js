import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, ScrollView, Alert, Button} from 'react-native';
import Header from '../Header/index';
import Card from '../cards/index';
import {useSQLiteContext} from "expo-sqlite";
import {useEffect, useState, useCallback} from "react";
import {useFocusEffect} from "@react-navigation/native";

export default function MainScreen({ navigation }) {
    const hoje = new Date().toISOString().split('T')[0];
    const [cardAberto, setCardAberto] = useState(null);

    const db = useSQLiteContext();
    const [dados, setDados] = useState([]);
    const atividades = async () => {

        try {
            const allDados = await db.getAllAsync(`SELECT * FROM atividades WHERE data = "${hoje}"`);
            setDados(allDados);
        } catch (e) {
            console.error(e);
        }
    };

    useFocusEffect(useCallback(() => {
        atividades();
    }, [hoje]))

    const testeItem = async () => {

            try {
                const resultado = await db.runAsync(
                    'INSERT INTO atividades (nome, data, descricao, concluida) VALUES (?, ?, ?, ?)',
                    ['testeverde', '2026-05-04', 'testeverde', 1]);
                    const verde = await db.getAllAsync(`SELECT * FROM atividades WHERE concluida = 1`)
                console.log(verde)

            } catch (erro) {
            console.error(erro);}
    }
    return (
        <View style={styles.container}>
            <Header nav={navigation} />
            <ScrollView style={styles.scroll}>
                <StatusBar style="auto" />

                {dados.map((item) => {
                    let corVerdeClaro = "#88e788";
                    let corVerdeEscuro = '#5faf5f'
                    let corCinzaClaro  = '#bdbdbd'
                    let corCinzaEscuro = '#8a8a8a'

                    if (item.concluida === 0 ) {
                    return (
                    <Card
                        key={item.id}
                        atualizarLista={atividades}
                        item={item}
                        color={corCinzaClaro}
                        secondColor={corCinzaEscuro}
                        cardTitle={item.nome}
                        cardDescription={item.descricao}
                        isExpanded={cardAberto === item.id}
                        onToggle={() => setCardAberto(cardAberto === item.id ? null : item.id)}
                    />
            ) } else if (item.concluida === 1) {
                        return (
                            <Card
                                key={item.id}
                                atualizarLista={atividades}
                                item={item}
                                color={corVerdeClaro}
                                secondColor={corVerdeEscuro}
                                cardTitle={item.nome}
                                cardDescription={item.descricao}
                                isExpanded={cardAberto === item.id}
                                onToggle={() => setCardAberto(cardAberto === item.id ? null : item.id)}
                            />
                        )
                    }
                })}

            <Button title='botao'
            onPress={testeItem}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scroll: {
        flex: 1,
    },
});
