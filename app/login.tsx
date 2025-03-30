import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { useDatabase } from '~/utils/database';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const { addData } = useDatabase();
  const handleSubmit = async () => {
    await addData({ name, email });
  };

  return (
    <View className=" flex flex-1 items-center justify-center gap-4 bg-slate-500 px-8">
      <Text>Login page</Text>
      <TextInput className="w-full bg-white" placeholder="Name" onChangeText={setName} />
      <TextInput className="w-full bg-white" placeholder="Email" onChangeText={setEmail} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default Login;
