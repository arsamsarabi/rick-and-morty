import mongoose from 'mongoose'

const { Schema } = mongoose

const OriginSchema = new Schema({
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

const OriginModel = mongoose.model('Origin', OriginSchema)

export { OriginModel as Origin }
