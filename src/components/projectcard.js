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

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 100vw;
  }
  @media (max-width: 450px) {
    width: 100vw;
  }
`
// Working on Project card hover effect, no success
/* const DescriptionWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  visibility: hidden;

  ${ProjectCardContainer}:hover & {
    visibiliy: visible;
  }
` */
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

const ProjectCard = ({ background, title, description }) => {

  return (
    <ProjectCardContainer background={background}>
      {/*     <DescriptionWrapper> */}
      <Description>
        <h3>{title}</h3>
        {/* <p>{description}</p> */}
      </Description>
      {/* </DescriptionWrapper> */}
    </ProjectCardContainer>
  )
}
export default ProjectCard