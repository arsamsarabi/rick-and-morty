import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Episode {
    apiId: Int
    name: String
    air_date: String
    episode: string
    characters: [Character!]!
    created: String
  }
  type Query {
    episode(id: ID!): Episode
    episodes: [Episodes]
  }
`

export default typeDefs
