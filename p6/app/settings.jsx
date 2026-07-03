import {View, Text, StyleSheet,  Pressable} from "react-native";
import { useRouter } from "expo-router";

export default function Settings(){

    const router = useRouter();
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <Pressable style={styles.backButton} onPress={() => router.back()}>
                <Text style={styles.backText}>press here to go to home</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0f172a', justifyContent: 'center', alignItems: 'center' },
    title: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
    backButton: { marginTop: 30, padding: 10 },
    backText: { color: '#00E676', fontSize: 16, fontWeight: '600' }
});