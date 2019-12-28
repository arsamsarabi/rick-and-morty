import React, { ReactElement } from 'react'
import { useQuery } from '@apollo/react-hooks'
import styled from 'styled-components'
import { client } from '#utils/apollo'
import { getCharacters } from '#graphql'
import { Layout } from '#components'

const StyledApp = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const App = (): ReactElement => {
  const { loading, error, data } = useQuery(getCharacters(), {
    client,
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error! ${error}</p>
  return (
    <Layout>
      <StyledApp>Hello World!</StyledApp>
    </Layout>
  )
}

export default App
