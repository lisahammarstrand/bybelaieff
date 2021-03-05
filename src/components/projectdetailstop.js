import React from 'react'
import styled from 'styled-components'

const ProjectDetailsTopSection = styled.section`
 /*  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;  */
  width: 100%;
  height: 210px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background: ${(props) => props.background};  
  text-align: center;
`

const DetailsTopSection = ({ background, title }) => {
  return (
    <ProjectDetailsTopSection background={background}>
      <h1 style={{ fontSize: `2.25rem`, fontWeight: `400` }}>{title}</h1>
    </ProjectDetailsTopSection>
  )
}
export default DetailsTopSection