import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import Card from '~/components/InitScreen/Card';

const index = () => {
  return (
    <View className="flex flex-1 justify-end gap-16 bg-stone-100 px-8 py-16">
      <View className="flex gap-2">
        <Ionicons name="person-add-outline" size={40} />
        <Text className="text-4xl">Bem vindo ao o SaudeEnsina</Text>
      </View>
      <View className="flex w-full flex-row justify-between">
        <Card route="/login_doctor" icon="person-circle-outline" title="Um paciente" />
        <Card route="/login_doctor" icon="medical-outline" title="Médico(a)" />
      </View>
    </View>
  );
};

export default index;
