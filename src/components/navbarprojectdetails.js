import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
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
  `
const NavIcon = styled.h3`
  margin: 0px;
  color: black;
`

const DetailsNavbar = ({ linkleft, linkright }) => {
  return (
    <NavContainer>
      <Link to={linkleft}>
        <NavIcon>
          <FontAwesomeIcon icon={faChevronLeft} />
        </NavIcon>
      </Link>
      <Link to={linkright}>
        <NavIcon>
          <FontAwesomeIcon icon={faChevronRight} />
        </NavIcon>
      </Link>
    </NavContainer>
  )
}
export default DetailsNavbar

