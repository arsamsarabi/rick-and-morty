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
    episodes: [Episode!]!
    created: String!
  }
  type Query {
    character(id: ID!): Character
    characters: [Character]
  }
`

export default typeDefs
