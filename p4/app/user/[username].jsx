import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';

export default function UserProfile(){
    const { username } = useLocalSearchParams();

    return (
        <View>
            <Stack.Screen options = {{title : `Profile of ${username}`}} />
            <Text style = {styles.header}>Profile of {username}</Text>
            <Text style = {styles.info}>Name : {username}</Text>
            <Text style = {styles.info}>Course : B.Tech CSE</Text>
            <Text style = {styles.info}>Status : Environment Fixed</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {fontSize : 24, fontWeight : 'bold'},
    info : {fontSize : 16, marginVertical : 5},
    container : {flex : 1, justifyContent : 'center', alignItems : 'center', gap : 20}
})