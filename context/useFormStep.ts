import { create } from 'zustand';

import { SchemaType as formOne } from '~/schema/formOne';
import { SchemaType as formThree } from '~/schema/formThree';
import { SchemaType as formTwo } from '~/schema/formTwo';

type UserType = formOne & formTwo & formThree;

type UseFormStepType = {
  user: UserType;
  updateUser: <T>(data: T) => void;
  
};

const defaultUser: UserType = {
  name: '',
  email: '',
  number: '',
  confirmPassword: '',
  password: '',
  cpf: '',
  rg: '',
  birthday: undefined,
  gender: undefined,
  race: undefined,
  sex: undefined,
  socialName: undefined,
  zipCode: '',
  address: '',
  city: '',
  state: '',
  country: '',
};

export const useFormStep = create<UseFormStepType>((set) => ({
  user: defaultUser,
  updateUser: (data) => set((state) => ({ user: { ...state.user, data } })),
}));
