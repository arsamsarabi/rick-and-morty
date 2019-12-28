import gql from 'graphql-tag'

export const getCharacters = () => gql`
  {
    characters {
      apiId
      name
      image
      episodesCount
    }
  }
`
