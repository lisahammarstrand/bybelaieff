import React from 'react'
import styled from 'styled-components'

const ProjectDetailsToppSection = styled.section`
/*   position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
  width: 100%;
  height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background: ${(props) => props.background};  
  transform: translate(0px, -100px); 
  text-align: center;
`
export const ToppSectionTitle = styled.h1`
  font-size: 102px;
`
const ChevronDown = styled.span`
  position: absolute;
  bottom: 32px;
  font-size: 42px;
`
const DetailsToppSection = ({ background, title, description }) => {
  return (
    <ProjectDetailsToppSection background={background}>
      <ToppSectionTitle>{title}</ToppSectionTitle>
      <h2>{description}</h2>
      <ChevronDown>
        ▽
      </ChevronDown>
    </ProjectDetailsToppSection>
  )
}
export default DetailsToppSection