import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Character {
    id: ID!
    name: String!
    status: String!
    species: String!
    type: String!
    gender: String!
    origin: Location!
    location: Location!
    image: String!
    episode: [String!]!
    url: String!
    created: String!
  }
  type Query {
    getCharacter(id: ID!): Character
    getAllCharacters: [Character]
  }
`

export default typeDefs
