import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const ProjectCardContainer = styled.div`
  position: relative;
  width: 25vw;
  height: 300px;
  background: ${(props) => props.background};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid white;

  @media (max-width: 768px) {
    width: 50vw;
  }
  @media (max-width: 450px) {
    width: 100vw;
  }
`

const ProjectCard = ({ background, title, description }) => {
  return (
    <ProjectCardContainer background={background}>
      <h2>{title}</h2>
      <p>{description}</p>
    </ProjectCardContainer>
  )
}
export default ProjectCard