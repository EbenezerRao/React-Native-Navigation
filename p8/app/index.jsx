import {View, Text, StyleSheet, Pressable} from 'react-native';
import { Link } from 'expo-router';

export default function Home(){
    return (
        <View style={styles.con}>
            <Text style={styles.text}>Home Screen</Text>
            <Link href = '/product' asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Go to Products</Text>
                </Pressable>
            </Link>

            <Link href = '/item_99aq' asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Open Dynamic Route </Text>
                </Pressable>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    con : {
        flex: 1,
        backgroundColor: '#1e293b',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,

    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
})