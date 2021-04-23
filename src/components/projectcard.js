import React from 'react'
import styled from 'styled-components'

const ProjectCardContainer = styled.div`
  position: relative;
  width: 33.3333333vw;
  height: 300px;
  background: ${(props) => props.background};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover > div {
    background:rgba(0, 0, 0, 0.1);
  } 

  @media (max-width: 768px) {
    width: 100vw;
  }
  @media (max-width: 450px) {
    width: 100vw;
  }
`
const DescriptionWrapper = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: ease 1s;

  &:hover {
  transform: scale(1.1);
}
`

const ProjectCard = ({ background, title }) => {

  return (
    <ProjectCardContainer background={background}>
      <DescriptionWrapper>
        <Description>
          <h3>{title}</h3>
        </Description>
      </DescriptionWrapper>
    </ProjectCardContainer>
  )
}
export default ProjectCard