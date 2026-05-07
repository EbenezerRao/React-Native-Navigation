import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';

export default function DocsScreen(){
    const { slug } = useLocalSearchParams();

    return (
        <View style = {styles.container}>
            <Stack.Screen options = {{title : `Docs ${slug}`}} />
            <Text style = {styles.header}>{JSON.stringify(slug)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {fontSize : 24, fontWeight : 'bold'},
    container : {flex : 1, justifyContent : 'center', alignItems : 'center', gap : 20}
})