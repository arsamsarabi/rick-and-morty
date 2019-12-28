import styled, { css, keyframes } from 'styled-components'
import { lighten, darken } from 'polished'
interface StyledLayoutProps {
  theme: Theme
}

export const StyledLayout = styled.section(({ theme }: StyledLayoutProps) => {
  return css`
    background-color: ${theme.palette.contrast};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  `
})

export const Content = styled.main`
  flex: 1;
  padding: 32px;
  display: flex;
`
