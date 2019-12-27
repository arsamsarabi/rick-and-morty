import styled, { css, keyframes } from 'styled-components'
import { lighten, darken } from 'polished'
interface StyledLayoutProps {
  theme: Theme
}

const backgroundAnimation = keyframes`
  0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

export const StyledLayout = styled.section(({ theme }: StyledLayoutProps) => {
  return css`
    background-color: ${theme.palette.contrast};
    background-size: 400% 400%;
    animation: ${backgroundAnimation} 10s ease infinite;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `
})

export const Content = styled.main`
  flex: 1;
  padding: 32px;
  display: flex;
`
