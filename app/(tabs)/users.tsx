import {SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { connectSocket } from "../../src/socket";
import { FlatList,Text } from "react-native";

interface User {
    socketId: string;
    user: string;
}

export default() => {
    const { user } = useLocalSearchParams<{ user: string }>();
    const [socket, setSocket] = useState<Socket | undefined>(undefined);
    const [users, setUsers] = useState<User[]>([]);
    
    useEffect(() => {
        connectSocket(user)
            .then((socketInstance) => {
                setSocket(socketInstance);
            })
            .catch((error) => console.error("Error connecting socket:", error));
        return () => {
            socket?.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!socket) return;
        socket.on("users", (connectedUsers: User[]) => {
            setUsers(connectedUsers);
        });
        return () => {
            socket.off("users");
        };
    }, [socket]);

    return (
        <SafeAreaView>
            <FlatList
                data={users}
                keyExtractor={(item) => item.socketId}
                renderItem={({ item }) => (
                    <Text>{item.user} ({item.socketId})</Text>
                )}
            />
        </SafeAreaView>
    );
}