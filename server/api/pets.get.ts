import { desc } from 'drizzle-orm'
import { pets } from '../db/schema'
import { useDb } from '../db'

export default defineEventHandler(async () => {
  const db = useDb()
  return db.select().from(pets).orderBy(desc(pets.createdAt))
})