import styled, { keyframes } from 'styled-components'

const showhbgmenu = keyframes`
  0% {max-height: 0px;}
  100% {max-height: 600px;}
`

export const HamburgerMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #1f363d;
  color: white;
  width: 200px;
  padding: 0px;
  text-align: left;
  position: absolute;
  top: 100;
  right: 0;
  animation: ${showhbgmenu} 0.5s forwards;
  transition: transfrom 0.3s ease-in-out;
  
  &:active {
    visibility: visible;
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`

export const HbgNavList = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 16px 16px 16px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`




