import mongoose from 'mongoose'

const { Schema } = mongoose

const CharacterSchema = new Schema({
  name: String,
  status: String,
  species: String,
  type: String,
  gender: String,
  origin: {
    type: Schema.Types.ObjectId,
    ref: 'Origin',
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: 'Location',
  },
  image: String,
  episode: [String],
  url: String,
  created: String,
})

const CharacterModel = mongoose.model('Character', CharacterSchema)

export { CharacterModel as Character }
