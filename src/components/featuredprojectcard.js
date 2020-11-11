import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const FeaturedProjectContainer = styled.div`
  position: relative;
  width: 50vw;
  height: 475px;
  background: ${(props) => props.background};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid white;

  @media (max-width: 768px) {
    width: 100vw;
  }
`

const FeaturedProjectCard = ({ background, title, description }) => {
  return (
    <FeaturedProjectContainer background={background}>
      <h2>{title}</h2>
      <p>{description}</p>
    </FeaturedProjectContainer>
  )
}
export default FeaturedProjectCard