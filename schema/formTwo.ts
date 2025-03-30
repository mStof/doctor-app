import * as z from 'zod';

export const schema = z.object({
  socialName: z.string().max(100, 'Máximo de 100 caracteres').optional(),
  birthday: z.date({ required_error: 'Campo obrigatório' }).optional(),
  sex: z.enum(['masculino', 'feminino']).optional(),
  gender: z.enum(['Homem', 'mulher', 'ambos']).optional(),
  race: z.enum(['preta', 'parda', 'branca', 'amarela', 'indígena']).optional(),
});

export type SchemaType = z.infer<typeof schema>;
