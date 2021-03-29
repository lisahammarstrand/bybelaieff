import styled, { keyframes } from 'styled-components'

export const Dropdown = styled.div`
  position: absolute;
  top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #1f363d;
  color: white;
  width: 180px;
  height: 520px;
  padding: 0px;
  text-align: left;
  animation: showDropdown 1s forwards;
  transition: transform 0.3s ease-in-out;
  z-index: 10;

  @keyframes showDropdown {
    0% {height: 0px;}
    100% {height: 520px;}
  }

  &:active {
    visibility: visible;
  }
`
export const DropdownNavlist = styled.ul`
  position: absolute;
  top: 0px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 16px;
`
const showdropdownitem = keyframes`
  0% {height: 0px;}
  100% {height: 27px;}
`

export const DropdownNavItem = styled.li`
  color: white;
  font-size: 0.9rem;
  margin-right: 0rem;
  width: 100%;
  height: 27px;
  background: #1f363d;
  cursor: pointer;
  animation: ${showdropdownitem} 1s forwards;
  transition: transform 0.3s ease-in-out;
`

const showdropdownitemlarge = keyframes`
  0% {height: 0px;}
  100% {height: 44px;}
`

export const DropdownNavItemLarge = styled.li`
  color: white;
  font-size: 0.9rem;
  margin-right: 0rem;
  height: 44px;
  line-height: normal;
  background: #1f363d;
  cursor: pointer;
  animation: ${showdropdownitemlarge} 1s forwards;
  transition: transform 0.3s ease-in-out;
`