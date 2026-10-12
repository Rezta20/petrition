import { petSchema } from '#shared/pet'
import { pets } from '../db/schema'
import { useDb } from '../db'

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, petSchema.parse) // 不過關會自動回 400
  const db = useDb()
  const [pet] = await db.insert(pets).values(body).returning()
  return pet
})