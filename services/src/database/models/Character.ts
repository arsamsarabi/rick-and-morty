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
  originUrl: String,
  location: String,
  locationUrl: String,
  image: String,
  episode: [String],
  url: String,
  created: String,
})

const CharacterModel = mongoose.model('Character', CharacterSchema)

export { CharacterModel as Character }
