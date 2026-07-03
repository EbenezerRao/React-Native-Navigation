import { View, Text, StyleSheet,  Pressable } from "react-native";
import {Link} from "expo-router";

export default function Home(){
    return (
        <View style={styles.container}> 
            <Text style={styles.title}>Home</Text>
            <Text style={styles.subtitle}>Phase 9</Text>

            <Link href="/settings" asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.btnText}>press here to go to home</Text>
                </Pressable>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0f172a', justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { color: '#00E676', fontSize: 32, fontWeight: 'bold' },
    subtitle: { color: '#64748b', fontSize: 16, marginBottom: 40 },
    button: { width: '85%', padding: 16, backgroundColor: '#1e293b', borderRadius: 8, alignItems: 'center', borderWidth: 1, borderColor: '#334155' },
    btnText: { color: '#fff', fontWeight: '600', fontSize: 16 }
});