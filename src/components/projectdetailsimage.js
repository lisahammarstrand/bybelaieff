import React from 'react'
import styled from 'styled-components'
import ProjectSection from './projectsection'

const ProjectDetailsImageSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-image: url('${(props) => props.background}');
  background-size: cover; 
`

const DetailsImageSection = ({ background }) => {
  return (
    <ProjectDetailsImageSection background={background} />
  )
}
export default DetailsImageSection