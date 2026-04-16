import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Header(props) {
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Gerenciador de atividades</Text>

            <View style={styles.header}>
            <Text style={styles.data}>{day}/{month}/{year}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {props.nav.navigate('Agendamento')}}>
                    <Text style={styles.plus}>+</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        backgroundColor: '#4ea1b9',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        borderRadius: 8,
        height: 110,
        top: 0,
    },
    header: {
        flexDirection: 'row',
    },
    data: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        width: '50%',
        textAlign: 'center',
        fontSize: 18
    },
    button: {
    backgroundColor: 'white',
        padding: 10,
        borderRadius: '70%',
        width: 50,
        height: 50,
        marginLeft: 10,

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