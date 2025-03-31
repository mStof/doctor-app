import { Ionicons } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, router } from 'expo-router';
import { useForm } from 'react-hook-form';
import { Button, Text, View } from 'react-native';

import Input from '~/components/StepOne/Input';
import { schema, SchemaType } from '~/schema/formOne';
import { useDatabase } from '~/utils/database';

const Login_doctor = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const { addData } = useDatabase('doctors');

  const onNextStep = (data: SchemaType) => {
    try {
      addData(data);
      router.navigate('/login_doctor');
    } catch (err) {
      console.log(err);
    }
  };

  const cpfMask = (value: string) => {
    return (
      value &&
      value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    );
  };

  return (
    <View className="flex-1 items-center justify-center gap-8 bg-stone-100 px-8">
      <View className="flex w-full flex-row gap-1.5">
        <Ionicons name="medical-outline" size={32} />
        <Text className="text-4xl text-stone-900 ">Registrar-se</Text>
      </View>
      <View className="flex w-full gap-4">
        <Input
          error={errors.name?.message}
          control={control}
          name="name"
          inputProps={{ placeholder: 'Nome' }}
          viewStyle={{ width: '100%' }}
        />

        <View className="flex w-full flex-row gap-2">
          <Input
            error={errors.email?.message}
            control={control}
            name="email"
            inputProps={{ placeholder: 'Email' }}
          />
          <Input
            error={errors.number?.message}
            control={control}
            name="number"
            inputProps={{ placeholder: 'Número', maxLength: 15, keyboardType: 'numeric' }}
          />
        </View>

        <View className="flex w-full  flex-row gap-2">
          <Input
            error={errors.rg?.message}
            control={control}
            name="rg"
            // mask={rgMask}
            inputProps={{ placeholder: 'R.G', maxLength: 12, keyboardType: 'numeric' }}
          />
          <Input
            error={errors.cpf?.message}
            control={control}
            name="cpf"
            mask={cpfMask}
            inputProps={{ placeholder: 'C.P.F', maxLength: 14, keyboardType: 'numeric' }}
          />
        </View>
        <View className="flex w-full  flex-row gap-2">
          <Input
            error={errors.password?.message}
            control={control}
            name="password"
            inputProps={{ placeholder: 'Senha' }}
          />
          <Input
            error={errors.confirmPassword?.message}
            control={control}
            name="confirmPassword"
            inputProps={{ placeholder: 'Confirma a senhaa' }}
          />
        </View>
        <Button title="Submit" onPress={handleSubmit(onNextStep)} />
        <View className="mt-4 flex flex-row items-center justify-between gap-2">
          <Link href="/login_doctor" className="font-bold text-sky-950 underline">
            Já possui uma conta?
          </Link>
          <Link href="/" className="font-bold text-sky-950 underline">
            Inicio
          </Link>
        </View>
      </View>
    </View>
  );
};

export default Login_doctor;
