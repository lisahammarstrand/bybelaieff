import styled from 'styled-components'

export const HamburgerMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #1f363d;
  color: white;
  width: 150px;
  height: 180px;
  padding: 0px;
  text-align: center;
  position: absolute;
  top: 100;
  right: 0;
  animation: showMenu 1s forwards;
  transition: transfrom 0.3s ease-in-out;
  z-index: 10;
  
  @keyframes showMenu {
    0% {height: 0px;}
    100% {height: 180px;}
  }
  
  &:active {
    visibility: visible;
  }

  @media (min-width: 650px) {
    display: none;
  }
`
export const HbgNavList = styled.ul`
  position: absolute;
  top: 100;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
