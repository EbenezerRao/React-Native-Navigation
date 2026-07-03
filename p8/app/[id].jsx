import {View, Text, StyleSheet, Pressable} from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'

export default function DynamicDetail() {
    const {id} = useLocalSearchParams()
    const router = useRouter()

    return ( 
        <View style={styles.con}>
            <Text style={styles.txt}>Dynamic Item View</Text>
            <Text style={styles.txt}>Fetched ID : {id}</Text>

            <Pressable onPress={() => router.back()} style={styles.btn}>
                <Text style={styles.btntxt}>
                    Go Back
                </Text>
            </Pressable>
        </View>
    )

}

const styles = StyleSheet.create({
    con : {
        flex: 1,
        backgroundColor: '#0f172a',
        justifyContent: 'center',
        alignItems: 'center'
    },

    txt : {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },

    btn : {
        backgroundColor: '#1e293b',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginTop: 20,
    },
    btntxt : {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})