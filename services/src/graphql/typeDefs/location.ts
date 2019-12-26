import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Location {
    apiId: Int
    name: String
    type: String
    dimension: String
    residents: [Character!]!
    created: String
  }
  type Query {
    location(id: ID!): Location
    locations: [Locations]
  }
`

export default typeDefs
