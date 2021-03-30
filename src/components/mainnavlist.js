import styled from 'styled-components'

// Exported to Header component

export const MainNavList = styled.ul`
display: none;

@media (min-width: 650px) {
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
}
`