import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import ProjectCard from './projectcard'


const ProjectSectionContainer = styled.section`
  width: 100%;
  height: auto;
  background: lightblue;
  color: white;
  display: flex;
  flex-wrap: wrap;
`
const ProjectSection = () => {
  return (
    <ProjectSectionContainer>
      <ProjectCard
        background="#65A68A"
        title="Project 1"
        description="Description 1"
      />
      <ProjectCard
        background="#7ECDAC"
        title="Project 2"
        description="Description 2"
      />
      <ProjectCard
        background="#6FD3E9"
        title="Project 3"
        description="Description 3"
      />
      <ProjectCard
        background="#B6B868"
        title="Project 4"
        description="Description 4"
      />
      <ProjectCard
        background="#49BBD3"
        title="Project 5"
        description="Description 5"
      />
      <ProjectCard
        background="#17525F"
        title="Project 6"
        description="Description 6"
      />
      <ProjectCard
        background="#7D7E38"
        title="Project 7"
        description="Description 7"
      />
      <ProjectCard
        background="#3C8797"
        title="Project 8"
        description="Description 8"
      />
    </ProjectSectionContainer>
  )
}
export default ProjectSection