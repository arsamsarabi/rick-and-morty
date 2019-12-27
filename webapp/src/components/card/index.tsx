import styled, { css } from 'styled-components'

export const Card = styled.div(({ theme }) => {
  return css`
    background-color: ${theme.colors.white};
    border-radius: 10px;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);
    width: 250px;
    height: 350px;
    overflow: hidden;
    transition: 0.2s all ease-in-out;

    &:hover {
      transform: scale(1.15, 1.15);
      box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.2);
    }
  `
})
