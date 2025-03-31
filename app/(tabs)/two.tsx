import { router, Stack } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Profile' }} />
      <View className="flex flex-1 items-center justify-center gap-4 bg-stone-100 px-8">
        <Text className='text-4xl '>Deslogar!</Text>
        <Text className='text-4xl '>Deslogar!</Text>
        <Text className='text-4xl '>Deslogar!</Text>
        <Text className='text-4xl '>Deslogar!</Text>
        <Text className='text-4xl '>Deslogar!</Text>
        <Text className='text-4xl '>Deslogar!</Text>
        <Text className='text-4xl '>Deslogar!</Text>
        <Text className='text-4xl '>Deslogar!</Text>
        <Button onPress={() => router.push('/login_user')} title="Deslogar" />
        <Text className='text-4xl '>Deslogar!</Text>
        <Text className='text-4xl '>Deslogar!</Text>
        <Text className='text-4xl '>Deslogar!</Text>
        <Text className='text-4xl '>Deslogar!</Text>
        <Text className='text-4xl '>Deslogar!</Text>
        <Text className='text-4xl '>Deslogar!</Text>
        <Text className='text-4xl '>Deslogar!</Text>
        <Text className='text-4xl '>Deslogar!</Text>
      </View>
    </>
  );
}
