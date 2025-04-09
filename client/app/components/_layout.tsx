import { Stack } from "expo-router";

export default function BillLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="task/[id]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
