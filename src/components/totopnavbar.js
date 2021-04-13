import React from 'react'
import styled from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const NavContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 32px;
  background: #ffffff;
  `
const NavIcon = styled.h3`
  margin: 0px;
  color: black;
  transition: ease 0.5s;

  &:hover {
    transform: scale(1.2);
  }
`

const ToTopNavbar = ({ linktotop }) => {
  return (
    <NavContainer>
      <AnchorLink to={linktotop}>
        <NavIcon>
          <FontAwesomeIcon icon={faChevronUp} />
        </NavIcon>
      </AnchorLink>
    </NavContainer>
  )
}
export default ToTopNavbar