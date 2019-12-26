import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Layout } from '../components'

const StyledApp = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const App = (): ReactElement => {
  return (
    <Layout>
      <StyledApp>Hello World!</StyledApp>
    </Layout>
  )
}

export default App
