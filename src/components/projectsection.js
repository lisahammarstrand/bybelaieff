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
          background="#65A68A"
          title="Project 1"
          description="Description 1"
        />
      </Link>
      <Link to="/">
        <ProjectCard
          background="#7ECDAC"
          title="Project 2"
          description="Description 2"
        />
      </Link>
      <ProjectCard
        background="#6FD3E9"
        title="Project 3"
        description="Description 3"
      />
      <Link to="/">
        <ProjectCard
          background="#B6B868"
          title="Project 4"
          description="Description 4"
        />
      </Link>
      <Link to="/">
        <ProjectCard
          background="#49BBD3"
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
          background="#3C8797"
          title="Project 8"
          description="Description 8"
        />
      </Link>
      <Link to="/">
        <ProjectCard
          background="#65A68A"
          title="Project 9"
          description="Description 9"
        />
      </Link>
      <Link to="/">
        <ProjectCard
          background="#7ECDAC"
          title="Project 10"
          description="Description 10"
        />
      </Link>
      <Link to="/">
        <ProjectCard
          background="#6FD3E9"
          title="Project 11"
          description="Description 11"
        />
      </Link>
      <Link to="/">
        <ProjectCard
          background="#B6B868"
          title="Project 12"
          description="Description 12"
        />
      </Link>
    </ProjectSectionContainer>
  )
}
export default ProjectSection