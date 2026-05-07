import { View, Text, StyleSheet, Pressable} from 'react-native';
import { Link } from 'expo-router';

export default function Home(){
    return (
        <View style = {styles.container}>
            <Text style = {styles.header}>Home Page</Text>

            <Link href = '/user/ebby' asChild>
                <Pressable style = {styles.press}>
                    <Text style = {styles.text}>Go to Ebby's Profile</Text>
                </Pressable>
            </Link>

            <Link href = '/user/aaryan' asChild>
                <Pressable style = {styles.press}>
                    <Text style = {styles.text}>Go to Aaryan's Profile</Text>
                </Pressable>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {flex : 1, justifyContent : 'center', alignItems : 'center', gap : 20},
    header : {fontSize : 24, fontWeight : 'bold'},
    press : {marginTop : 10, backgroundColor : '#9c82f3', padding : 10, borderRadius : 5}
})