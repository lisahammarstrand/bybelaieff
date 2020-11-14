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

  a {
    text-decoration: none;
  }
`
const ProjectSection = () => {
  return (
    <ProjectSectionContainer>
      <Link to="/">
        <ProjectCard
          background="#70A9A1"
          title="Project 1"
          description="Description 1"
        />
      </Link>
      <Link to="/">
        <ProjectCard
          background="#9EC1A3"
          title="Project 2"
          description="Description 2"
        />
      </Link>
      <ProjectCard
        background="#1F363D"
        title="Project 3"
        description="Description 3"
      />
      <Link to="/">
        <ProjectCard
          background="#70A9A1"
          title="Project 4"
          description="Description 4"
        />
      </Link>
      <Link to="/">
        <ProjectCard
          background="#40798C"
          title="Project 5"
          description="Description 5"
        />
      </Link>
      <Link to="/">
        <ProjectCard
          background="#17525F"
          title="Project 6"
          description="Description 6"
        />
      </Link>
      <Link to="/">
        <ProjectCard
          background="#7D7E38"
          title="Project 7"
          description="Description 7"
        />
      </Link>
      <Link to="/">
        <ProjectCard
          background="#40798C"
          title="Project 8"
          description="Description 8"
        />
      </Link>
    </ProjectSectionContainer>
  )
}
export default ProjectSection