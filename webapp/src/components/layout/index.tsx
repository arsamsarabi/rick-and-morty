import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import { GlobalStyles } from '../../styles/global'
import { StyledLayout, Content } from './layout.styles'

export const Layout = ({ children }): ReactElement => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <StyledLayout>
          <Content>{children}</Content>
        </StyledLayout>
      </ThemeProvider>
    </>
  )
}

export default Layout
