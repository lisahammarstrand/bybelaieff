import React from 'react'
import styled from 'styled-components'


const ProjectDetailsImageSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  background: lightgray;
`

const DetailsImageSection = ({ image }) => {
  return (
    <ProjectDetailsImageSection>
      {image}
    </ProjectDetailsImageSection>

  )
}


export default DetailsImageSection