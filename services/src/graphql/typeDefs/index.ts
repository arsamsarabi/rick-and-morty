import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Location {
    apiId: String
    name: String
    type: String
    dimension: String
    residents: [Character!]!
    created: String
  }
  type Episode {
    apiId: String
    name: String
    air_date: String
    episode: String
    characters: [Character!]!
    created: String
  }
  type Character {
    apiId: String
    name: String!
    status: String!
    species: String!
    type: String!
    gender: String!
    origin: Location
    location: Location
    image: String!
    episodes: [Episode!]!
    created: String!
  }

  type Query {
    characters: [Character!]!
    character(id: String): Character!
    locations: [Location!]!
    location(id: String): Location!
    episodes: [Episode!]!
    episode(id: String): Episode!
  }
`

export default [typeDefs]
