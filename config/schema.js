import { pgTable } from 'drizzle-orm/pg-core'
import { serial, varchar, integer } from 'drizzle-orm/pg-core'

export const Users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  email: varchar('email').notNull(),
  imageUrl: varchar('image_url').notNull(),
  credits: integer('credits').default(3)
});

export const AiGeneratedImage = pgTable('aiGeneratedImage', {
  id: serial('id').primaryKey(),
  roomType: varchar('roomType').notNull(),
  designType: varchar('designType').notNull(),
  orgImage: varchar('orgImage').notNull(),
  aiImage: varchar('aiImage').notNull(),
  userEmail: varchar('userEmail')
}) 