import { Link, Stack, useRouter } from "expo-router";
import { Button, Text, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default () => {
    const [username, setUsername] = useState<string>("");
    const router = useRouter();

    const handleEnterChat = () => {
        if (username.trim() === "") {
            alert("Por favor, ingresa un nombre de usuario.");
            return;
        }
        router.push({ pathname: "/chat", params: { user: username } });
    }
    
    return(
        <SafeAreaView style ={style.container}>
        <Stack.Screen options={{headerShown : false}}/>
        <Text>Bienvenido al chat</Text>
        <TextInput placeholder="Usuario" value={username} onChangeText={t=> setUsername(t)}/>
        <Link href={{pathname:"/chat", params:{user:username}}} asChild>
        <Button title="Entrar"/></Link>
        <Link href= "/settings">Configuración</Link>
        </SafeAreaView>
    )

};
    const style = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:"center",
            alignItems :"center",
            gap:8
        },
    });
