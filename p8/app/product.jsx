import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useRouter} from 'expo-router';

export default function Product(){
    const router =  useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Product Screen</Text>
            <Pressable style={styles.btn} onPress={() => router.back()}>
                <Text style={styles.btnText}>Go back to Home</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#0f172a',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text : {
        color: '#00E676',
        fontSize: 24,
        fontWeight: 'bold'
    },
    btn : {
        marginTop: 30,
        padding: 10
    }
})