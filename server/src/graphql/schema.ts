import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Character {
    firstName: String
    lastName: String
  }
  type Query {
    dummy: String
  }
`

const resolvers = {
  // Query: {
  //   characters: () => [
  //     {
  //       firstName: 'Rick',
  //       lastName: 'Sanchez',
  //     },
  //   ],
  // },
}

export { typeDefs, resolvers }
