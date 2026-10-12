import { pgTable, serial, text, real, integer, boolean, timestamp } from 'drizzle-orm/pg-core'

export const pets = pgTable('pets', {
  id: serial('id').primaryKey(),
  species: text('species').notNull(), // 'dog' | 'cat'
  name: text('name').notNull(),
  weightKg: real('weight_kg').notNull(),
  ageMonths: integer('age_months').notNull(),
  neutered: boolean('neutered').notNull(),
  activity: text('activity').notNull(), // 'low' | 'normal' | 'high'
  createdAt: timestamp('created_at').defaultNow().notNull(),
})