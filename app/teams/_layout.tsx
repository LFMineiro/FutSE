import { Stack } from "expo-router";

export default function TeamsLayout() {
  return (
    <Stack>
      <Stack.Screen name="[teamId]" options={{ headerShown: false }} />
    </Stack>
  );
}
