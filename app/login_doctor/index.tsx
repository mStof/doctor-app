import { zodResolver } from '@hookform/resolvers/zod';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Button, Text, View } from 'react-native';

import Input from '~/components/LoginScreen/Input';
import { schema, SchemaType } from '~/schema/login';
import { useDatabase } from '~/utils/database';

const Login_doctor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });
  const { selectData } = useDatabase();
  const onNextStep = async (data: SchemaType) => {
    console.log(data);
    try {
      setIsLoading(true);
      const result = await selectData(data.email);
      const dataArr: any[] = [];
      result.forEach((item) => dataArr.push(item.data()));
      if (dataArr.length === 0) return Alert.alert('Email não cadastrado');
      if (dataArr[0].password === data.password) return router.navigate('/(tabs)');
      if (dataArr[0].password !== data.password)
        return Alert.alert('Alguma de suas informações estão invalidas');
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 items-center justify-center gap-8 bg-stone-100 px-8">
      <Text className="text-4xl text-stone-900 ">Logar-se</Text>
      <View className="flex w-full gap-4">
        <Input
          error={errors.email?.message}
          control={control}
          name="email"
          inputProps={{ placeholder: 'Email' }}
          viewStyle={{ width: '100%' }}
        />

        <Input
          error={errors.password?.message}
          control={control}
          name="password"
          inputProps={{ placeholder: 'Senha' }}
          viewStyle={{ width: '100%' }}
        />

        <Button title="Submit" onPress={handleSubmit(onNextStep)} disabled={isLoading} />
        <View className="mt-4 flex flex-row items-center justify-between gap-2">
          <Link href="/login_doctor/register/stepOne">Não possui uma conta?</Link>
        </View>
      </View>
    </View>
  );
};

export default Login_doctor;
