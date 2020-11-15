import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import ProjectSection from './projectsection'

const ProjectDetailsImageSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`

const DetailsImageSection = () => {
  return (
    <ProjectDetailsImageSection />
  )
}


export default DetailsImageSection