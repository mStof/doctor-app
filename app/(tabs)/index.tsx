import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Linking, ScrollView, Text, View } from 'react-native';

import { SchemaType } from '~/schema/formOne';
import { useDatabase } from '~/utils/database';

export default function Home() {
  const [users, setUsers] = useState<SchemaType[]>([]);
  const { selectAllData } = useDatabase('doctors');

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
        <Text className="text-2xl ">Escolha um médico(a) e contateo</Text>
        <ScrollView className="mt-8 flex w-full" contentContainerClassName="gap-8">
          {users.map(({ email, name, number }, index) => (
            <View
              key={index}
              className="flex w-full flex-row gap-2 rounded-lg border-2 border-stone-400 bg-stone-200 p-2"
              onTouchStart={() => console.log('Touched')}>
              <Image source={{}} className="size-16 rounded-md bg-red-500" />
              <View className="flex w-4/5 flex-row items-start justify-between">
                <Text>{name}</Text>
                <View className="flex h-full w-fit flex-col items-end gap-2">
                  <Text
                    className="text-sky-950 underline"
                    onPress={() => Linking.openURL('mailto:' + email)}>
                    {email}
                  </Text>
                  <Text
                    className="text-sky-950 underline"
                    onPress={() => Linking.openURL('tel:' + number)}>
                    {number}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}
