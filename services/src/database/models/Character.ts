import mongoose from 'mongoose'

const { Schema } = mongoose

const CharacterSchema = new Schema({
  apiId: String,
  name: String,
  status: String,
  species: String,
  type: String,
  gender: String,
  origin: String,
  location: String,
  image: String,
  episodes: [String],
  created: String,
})

const CharacterModel = mongoose.model('Character', CharacterSchema)

export { CharacterModel as Character }
