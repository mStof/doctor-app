import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import { useDatabase } from '~/utils/database';
import { SchemaType } from '~/schema/formOne';

export default function Home() {
  const [users, setUsers] = useState<SchemaType[]>([]);
  const { selectAllData } = useDatabase();

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await selectAllData();
      const usersList: SchemaType[] = [];

      result.forEach((user) => usersList.push(user.data() as SchemaType));
      setUsers(usersList);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View className="flex flex-1 items-center justify-center gap-4 bg-stone-100 p-8">
        <Text className="text-2xl ">Welcome to the Doctor App!</Text>
        <Text className="text-2xl ">Escolha um médico(a)</Text>
        <ScrollView className="flex w-full" contentContainerClassName="gap-8">
          {users.map(({ email, name, number }, index) => (
            <View
              key={index}
              className="flex w-full flex-row gap-2 rounded-lg bg-stone-400 p-2 border-2 border-stone-600"
              onTouchStart={() => console.log('Touched')}>
              <Image source={{}} className="size-16 rounded-md bg-red-500" />
              <View>
                <Text>{name}</Text>
                <Text>{email}</Text>
                <Text>{number}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}
