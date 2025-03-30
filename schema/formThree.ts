import * as z from 'zod';

export const schema = z.object({
  zipCode: z
    .string({ required_error: 'Campo obrigatório' })
    .regex(/^([\d]{2})\.*([\d]{3})-*([\d]{3})/),
  address: z.string({ required_error: 'Campo obrigatório' }),
  city: z.string({ required_error: 'Campo obrigatório' }),
  state: z.string({ required_error: 'Campo obrigatório' }).max(2, 'Máximo de 2 caracteres'),
  country: z.string({ required_error: 'Campo obrigatório' }),
});

export type SchemaType = z.infer<typeof schema>;
