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

export const getCharacter = () => gql`
  query character($id: String!) {
    character(id: $id) {
      apiId
      name
      image
      episodesCount
    }
  }
`
