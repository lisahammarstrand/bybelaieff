import styled from 'styled-components'

// Exported to Header component

export const MainNavList = styled.ul`
display: none;

@media screen and (min-width: 769px) {
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
}
`