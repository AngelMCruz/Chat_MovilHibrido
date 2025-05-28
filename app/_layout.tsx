import { Stack } from "expo-router";

export default() => (
    <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="chat" />
        <Stack.Screen name="Settings" />
    </Stack>
)