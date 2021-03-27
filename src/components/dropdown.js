import styled from 'styled-components'

export const Dropdown = styled.div`
  position: absolute;
  top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #1f363d;
  color: white;
  width: 180px;
  height: 540px;
  padding: 0px;
  text-align: left;
  animation: showDropdown 1s forwards;
  transition: transform 0.3s ease-in-out;
  z-index: 10;

  @keyframes showDropdown {
    0% {height: 0px;}
    100% {height: 540px;}
  }

  &:active {
    visibility: visible;
  }
`
export const DropdownNavlist = styled.ul`
  position: absolute;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 16px;
`
