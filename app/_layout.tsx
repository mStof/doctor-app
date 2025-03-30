import '../global.css';

import { Stack } from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="index">
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="login_doctor/index" />
      <Stack.Screen name="index" />
      <Stack.Screen
        name="login"
        options={{ presentation: 'modal', animation: 'fade_from_bottom' }}
      />
    </Stack>
  );
}
