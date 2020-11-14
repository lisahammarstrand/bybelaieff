import React from 'react'
import styled from 'styled-components'
import ProjectSection from './projectsection'

const ProjectDetailsDescription = styled.section`
  width: 100%;
  height: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
`
const DetailsDescription = ({ color, title, description }) => {
  return (
    <ProjectDetailsDescription color={color}>
      <h2>{title}</h2>
      <p>{description}</p>
    </ProjectDetailsDescription>
  )
}

export default DetailsDescription