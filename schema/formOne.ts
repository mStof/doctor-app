import * as z from 'zod';

export const schema = z
  .object({
    name: z
      .string({ required_error: 'Campo obrigatório' })
      .max(100, 'Máximo de 100 caracteres')
      .min(1, 'Campo obrigatório'),
    rg: z
      .string({ required_error: 'Campo obrigatório' })
      .regex(/^\d{2}.\d{3}.\d{3}-\d{1}$/, 'RG inválido')
      .max(12, 'Máximo de 12 caracteres'),
    cpf: z
      .string({ required_error: 'Campo obrigatório' })
      .max(14, 'Máximo de 14 caracteres')
      .regex(/^\d{3}.\d{3}.\d{3}-\d{2}$/, 'CPF inválido'),
    email: z.string({ required_error: 'Campo obrigatório' }).email(),
    number: z
      .string({ required_error: 'Campo obrigatório' })
      .max(15, 'Máximo de 15 caracteres')
      .regex(/\(\d{2}.\s\d{5}-\d{4}$/g, 'Número inválido'),
    password: z
      .string({ required_error: 'Campo obrigatório' })
      .max(50, 'Máximo de 50 caracteres')
      .min(6, 'Mínimo de 6 caracteres'),
    confirmPassword: z.string({ required_error: 'Campo obrigatório' }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'As senhas não conferem',
        path: ['confirmPassword'],
      });
    }
  });

export type SchemaType = z.infer<typeof schema>;
