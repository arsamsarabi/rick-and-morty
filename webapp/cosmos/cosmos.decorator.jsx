/*
  eslint
    "@typescript-eslint/explicit-function-return-type": "off"
*/
import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { theme } from '#styles/theme'

const CosmosWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Decorator = props => {
  const { children } = props
  return (
    <ThemeProvider theme={theme}>
      <CosmosWrapper>{children}</CosmosWrapper>
    </ThemeProvider>
  )
}

export default Decorator
