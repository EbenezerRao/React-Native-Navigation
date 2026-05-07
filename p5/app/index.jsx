import { View, Text, StyleSheet, Pressable} from 'react-native';
import { Link } from 'expo-router';

export default function Home(){
    return (
        <View style = {styles.container}>
            <Text style = {styles.header}>Home Page</Text>
            <Link href = '/docs/intro' style = {styles.link}>
                <Text style = {styles.text}>Introduction</Text>
            </Link>
            <Link href = '/docs/setup/expo' style = {styles.link}>
                <Text style = {styles.text}>Getting Started</Text>
            </Link>
            <Link href = '/docs/final/submission/btech/project' style = {styles.link}>
                <Text style = {styles.text}>Usage</Text>
            </Link>
            <Link href = '/docs/advanced' style = {styles.link}>
                <Text style = {styles.text}>Advanced</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {flex : 1, justifyContent : 'center', alignItems : 'center', gap : 20},
    header : {fontSize : 24, fontWeight : 'bold'},
    link : {fontSize : 18, borderBottomWidth : 1, borderBottomColor : '#000000'},
    text : {color : '#000000'}
})