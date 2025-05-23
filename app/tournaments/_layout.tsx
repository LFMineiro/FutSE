import { Stack } from "expo-router";

export default function TournmentLayout() {
  return (
    <Stack>
      <Stack.Screen name="tournaments" options={{ headerShown: false }} />
    </Stack>
  );
}
