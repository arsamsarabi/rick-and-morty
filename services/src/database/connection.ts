import mongoose from 'mongoose'

const { DB_URL = '' } = process.env

mongoose.set('bufferCommands', false)
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).catch(error => console.error(error))
mongoose.connection.on('error', err => {
  console.error(`MongoDB connection error: ${err}`)
  process.exit(-1)
})
