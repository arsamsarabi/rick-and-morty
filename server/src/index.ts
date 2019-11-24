import express from 'express'
import chalk from 'chalk'
import asciify from 'asciify'
import 'dotenv/config'

const { PORT } = process.env

const app = express()

app.get('*', (req, res) => {
  res.status(404).json({ message: 'route not found' })
})

app.listen(PORT, () => {
  asciify('R&M API', { font: 'linux' }, (err: any, res: any) => {
    console.log(chalk.bgHex('#eb4d4b').hex('#dff9fb')(`✨ Magic happens on port ${PORT}! ✨`))
    console.log(chalk.cyan(res))
  })
})
