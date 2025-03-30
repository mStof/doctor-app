import { router, Stack } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Profile' }} />
      <View className="flex flex-1 items-center justify-center bg-slate-500 px-8">
        <Text>Você não está logado</Text>
        <Button onPress={() => router.push('/login')} title="Logue" />
      </View>
    </>
  );
}
