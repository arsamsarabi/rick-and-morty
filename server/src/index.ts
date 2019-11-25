import express from 'express'
import chalk from 'chalk'
import asciify from 'asciify'
import { ApolloServer, gql } from 'apollo-server-express'
import { resolvers, typeDefs } from './graphql/schema'
import bodyParser from 'body-parser'
import 'dotenv/config'

const { PORT } = process.env

const server = new ApolloServer({
  resolvers,
  typeDefs,
})

const app = express()

server.applyMiddleware({ app, path: '/gql' })

app.use('/gql', bodyParser.json())

app.all('*', (req, res) => {
  res.status(404).json({ message: 'route not found' })
})

app.listen(PORT, () => {
  asciify('R&M API', { font: 'linux' }, (err: any, res: any) => {
    console.log(chalk.bgHex('#6ab04c').hex('#dff9fb')(`✨ Magic happens on port ${PORT}! ✨`))
    console.log(chalk.cyan(res))
  })
})
