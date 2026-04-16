import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../Header/index';

export default function MainScreen({ navigation }) {
    return (
        <View style={styles.container}>

            <Header nav={navigation} />
            <ScrollView style={styles.scroll}>
                <StatusBar style="auto" />


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
