import { forwardRef } from 'react';
import { Control, Controller } from 'react-hook-form';
import { View, Text, TextInput, TextInputProps, StyleProp, ViewStyle } from 'react-native';

import { SchemaType as login } from '~/schema/login';

type InputProps = {
  error?: string;
  name: keyof login;
  control: Control<login, any, login>;
  inputProps?: TextInputProps;
  viewStyle?: StyleProp<ViewStyle>;
  mask?: (value: string) => string;
};

const Input = forwardRef<TextInput, InputProps>(
  ({ error, control, name, inputProps, viewStyle, mask }, ref) => {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <View className="flex w-[49%] gap-2" style={viewStyle}>
            <TextInput
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={mask ? mask(field.value) : field.value}
              {...inputProps}
              ref={ref}
              className={`w-full rounded-lg border-2 ${error ? 'border-red-800 bg-red-200' : 'border-stone-400 bg-stone-100'} px-4 py-2 text-base text-stone-900`}
            />
            {error && <Text className="text-sm font-bold text-red-800">{error}</Text>}
          </View>
        )}
      />
    );
  }
);

export default Input;
