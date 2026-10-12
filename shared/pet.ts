import { z } from 'zod'

export const petSchema = z.object({
  species: z.enum(['dog', 'cat']),
  name: z.string().trim().min(1, '請填名字'),
  weightKg: z.number().positive().gt(0),
  ageMonths: z.number().int().min(0),
  neutered: z.boolean(),
  activity: z.enum(['low', 'normal', 'high']),
})

export type PetInput = z.infer<typeof petSchema>