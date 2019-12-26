import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Character {
    apiId: Int
    name: String!
    status: String!
    species: String!
    type: String!
    gender: String!
    origin: Location!
    location: Location!
    image: String!
    episode: [Episode!]!
    created: String!
  }
  type Query {
    character(id: ID!): Character
    characters: [Character]
  }
`

export default typeDefs
