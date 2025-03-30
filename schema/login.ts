import * as z from 'zod';

export const schema = z.object({
  email: z.string({ required_error: 'Campo obrigatório' }).email(),
  password: z
    .string({ required_error: 'Campo obrigatório' })
    .max(50, 'Máximo de 50 caracteres')
    .min(6, 'Mínimo de 6 caracteres'),
});

export type SchemaType = z.infer<typeof schema>;
