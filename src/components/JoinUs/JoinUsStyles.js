import styled from "styled-components"

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Changed to 2 columns */
  gap: 24px;
  margin: 24px auto; /* Centering the container horizontally */

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: 20px auto; /* Adjusted margin for medium breakpoints */
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${props => props.theme.breakpoints.sm}{
    max-width: 500px;
  }
`


