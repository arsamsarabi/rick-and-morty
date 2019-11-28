import mongoose from 'mongoose'

const { DB_URL } = process.env

if (DB_URL && DB_URL.length) {
  mongoose.connect(DB_URL, { useNewUrlParser: true })
} else {
  throw new Error('Database address not found')
}
