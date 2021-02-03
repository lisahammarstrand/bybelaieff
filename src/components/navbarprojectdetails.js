import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const NavContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 32px;
  color: black;
  `
const NavIcon = styled.h3`
  margin: 0px;
`

const DetailsNavbar = () => {
  return (
    <NavContainer>
      <NavIcon>
        <FontAwesomeIcon icon={faChevronLeft} />
      </NavIcon>
      <NavIcon>
        <FontAwesomeIcon icon={faChevronRight} />
      </NavIcon>
    </NavContainer>
  )
}
export default DetailsNavbar

