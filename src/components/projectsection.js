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
      <Link to="/detailshallbarvardag">
        <ProjectCard
          background="#70A9A1"
          title="Hållbar vardag"
          description="Description 1"
        />
      </Link>
      <Link to="/detailstradgardsmassan">
        <ProjectCard
          background="#9EC1A3"
          title="Trädgårdsmässan"
          description="Description 2"
        />
      </Link>
      <Link to="/detailssodertandlakarna">
        <ProjectCard
          background="#1F363D"
          title="Södertandläkarna"
          description="Description 3"
        />
      </Link>
      <Link to="/detailsseabreeze">
        <ProjectCard
          background="#70A9A1"
          title="Sea Breeze"
          description="Description 4"
        />
      </Link>
      <Link to="/detailssetterwalls">
        <ProjectCard
          background="#40798C"
          title="Setterwalls"
          description="Description 5"
        />
      </Link>
      <Link to="/detailsstockholmseukontor">
        <ProjectCard
          background="#17525F"
          title={<>Stockholms <br />EU-kontor</>}
          description="Description 6"
        />
      </Link>
      <Link to="/detailsyogahemfrid">
        <ProjectCard
          background="#7D7E38"
          title="Yoga/Hemfrid"
          description="Description 7"
        />
      </Link>
      <Link to="/detailskapi">
        <ProjectCard
          background="#40798C"
          title="Kapi"
          description="Description 8"
        />
      </Link>
    </ProjectSectionContainer>
  )
}
export default ProjectSection