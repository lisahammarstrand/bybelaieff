import React from 'react'
import styled from 'styled-components'

const ProjectDetailsTopSection = styled.section`
 /*  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;  */
  width: 100%;
  height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background: ${(props) => props.background};  
  text-align: center;
`
export const TopSectionTitle = styled.h1`
  font-size: 102px;
`
const ChevronDown = styled.span`
  position: absolute;
  bottom: 32px;
  font-size: 42px;
`

const DetailsTopSection = ({ background, title, description }) => {
  return (
    <ProjectDetailsTopSection background={background}>
      <TopSectionTitle>{title}</TopSectionTitle>
      <h2>{description}</h2>
      <ChevronDown>
        ▽
      </ChevronDown>
    </ProjectDetailsTopSection>
  )
}
export default DetailsTopSection