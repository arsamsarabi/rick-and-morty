import mongoose from 'mongoose'

const { Schema } = mongoose

const LocationSchema = new Schema({
  id: String,
  name: String,
  type: String,
  dimension: String,
  residents: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Character',
    },
  ],
  created: String,
})

const LocationModel = mongoose.model('Location', LocationSchema)

export { LocationModel as Location }
