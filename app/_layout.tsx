import { Stack } from "expo-router";

export default() => (
    <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" options={ {headerShown: false} }/>
        <Stack.Screen name="Settings" />
    </Stack>
)