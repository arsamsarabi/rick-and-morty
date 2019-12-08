import mongoose from 'mongoose'

const { Schema } = mongoose

const EpisodeSchema = new Schema({
  apiId: String,
  name: String,
  air_date: String,
  episode: String,
  characters: [String],
  created: String,
})

const EpisodeModel = mongoose.model('Episode', EpisodeSchema)

export { EpisodeModel as Episode }
