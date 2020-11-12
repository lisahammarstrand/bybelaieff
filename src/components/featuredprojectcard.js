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

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 100vw;
  }
`
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
  transform: scale(1.1);
  transition: ease 1s;
}
`
const FeaturedProjectCard = ({ background, title, description }) => {
  return (
    <FeaturedProjectContainer background={background}>
      <Description>
        <h2>{title}</h2>
        <p>{description}</p>
      </Description>
    </FeaturedProjectContainer>
  )
}
export default FeaturedProjectCard