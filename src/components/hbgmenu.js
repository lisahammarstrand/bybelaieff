import styled from 'styled-components'

export const HamburgerMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #1f363d;
  color: white;
  width: 200px;
/*   height: auto; */
  padding: 0px;
  text-align: left;
  position: absolute;
  top: 100;
  right: 0;
  animation: showMenu 1s forwards;
  transition: transfrom 0.3s ease-out;
 /*  z-index: 10; */
  
  @keyframes showMenu {
    0% {max-height: 0px;}
    100% {max-height: 600px;}
  }
  
  &:active {
    visibility: visible;
  }

  @media (min-width: 650px) {
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
export const ChevronIcon = styled.img`
  margin-left: auto;
  fill: #ffffff;
  width: 20px;
  height: 20px;
  transition: transform 0.6s ease;

  &:active, &:hover {
   transform: rotate(90deg);
  }
`



