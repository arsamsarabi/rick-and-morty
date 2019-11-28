import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Location {
    id: String
    name: String
    type: String
    dimension: String
    residents: [Character!]!
    created: String
  }
`

export default typeDefs
