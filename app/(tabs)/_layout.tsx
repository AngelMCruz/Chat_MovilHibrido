import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default () => {
    return (
        <Tabs
        screenOptions={{
            headerShown: true,
            tabBarActiveTintColor: "#e91e63",
            tabBarInactiveTintColor: "#000",
            tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 0,
            elevation: 0,
            },
        }}
        >
        <Tabs.Screen
            name="chat"
            options={{
            title: "Chat",
            tabBarIcon: ({ color }) => <FontAwesome name="comments" size={24} color={color} />,
            }}
        />
        <Tabs.Screen
            name="users"
            options={{
            title: "Users",
            tabBarIcon: ({ color }) => <FontAwesome name="users" size={24} color={color} />,
            }}
        />
        </Tabs>
    );
}
