import { Ionicons } from '@expo/vector-icons';
import { Href, router } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';

type CardProps = {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  route: Href;
};

const Card = ({ title, icon, route }: CardProps) => {
  return (
    <TouchableOpacity
      onPress={() => router.push(route)}
      activeOpacity={0.5}
      style={{ elevation: 2 }}
      className="flex aspect-square w-[45%] justify-between rounded-lg bg-stone-900 p-4">
      <Ionicons name={icon} color="white" size={44} />
      <View className="ml-1">
        <Text className="text-xl text-white">Sou</Text>
        <Text className="text-xl font-bold text-white">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
