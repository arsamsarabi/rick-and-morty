import mongoose from 'mongoose'

const { Schema } = mongoose

const LocationSchema = new Schema({
  apiId: String,
  name: String,
  type: String,
  dimension: String,
  residents: [String],
  created: String,
})

const LocationModel = mongoose.model('Location', LocationSchema)

export { LocationModel as Location }
