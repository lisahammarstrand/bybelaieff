import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Image from '../components/image'


const ProjectDetailsImageSection = styled.section`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  background: lightgray;
`

const DetailsImageSection = () => {
  return (
    <ProjectDetailsImageSection>
      <Image />
    </ProjectDetailsImageSection>

  )
}


export default DetailsImageSection