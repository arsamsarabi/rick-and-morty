import React, { ReactElement } from 'react'
import { useQuery } from '@apollo/react-hooks'
import styled from 'styled-components'
import { client } from '#utils/apollo'
import { getCharacters } from '#graphql'
import { Layout, Grid } from '#components'

const StyledApp = styled.section`
  flex: 1;
`

const App = (): ReactElement => {
  const { loading, error, data } = useQuery(getCharacters(), {
    client,
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error! ${error}</p>
  return (
    <Layout>
      <StyledApp>
        <Grid items={data.characters} />
      </StyledApp>
    </Layout>
  )
}

export default App
