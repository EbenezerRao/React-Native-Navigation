import { Stack } from "expo-router";

export default function Layout(){
    return (
        <Stack
        screenOptions = {{
            headerStyle : {backgroundColor : '#4e9af1'},
            headerTintColor : '#fff',
            headerTitleStyle : {fontWeight : 'bold'}
        }}
        >
            <Stack.Screen name = 'index' options = {{title : 'Home'}}/>
        </Stack>
    )
}