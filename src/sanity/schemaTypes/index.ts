import { type SchemaTypeDefinition } from 'sanity'
import { userSchema } from '../users_collection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [userSchema],
}
