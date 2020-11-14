import React from 'react'
import styled from 'styled-components'

const ProjectDetailsToppSection = styled.section`
  width: 100%;
  height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background: ${(props) => props.background};  
`
const ToppSectionTitle = styled.h1`
  font-size: 102px;
`

const DetailsToppSection = ({ background, title, description }) => {
  return (
    <ProjectDetailsToppSection background={background}>
      <ToppSectionTitle>{title}</ToppSectionTitle>
      <h2>{description}</h2>
    </ProjectDetailsToppSection>
  )
}
export default DetailsToppSection