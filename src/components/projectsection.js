import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import ProjectCard from './projectcard'


const ProjectSectionContainer = styled.section`
  width: 100%;
  height: 1200px;
  color: white;
  display: flex;
  flex-wrap: wrap;

  a {
    text-decoration: none;
  }
`
const ProjectSection = () => {
  const data = useStaticQuery(graphql`
  {
    allContentfulProjectCard(sort: {fields: order}) {
      edges {
        node {
          background
          title
          subtitle
          slug
          order
        }
      }
    }
  }
  
  
  `)
  return (
    <ProjectSectionContainer>
      {data.allContentfulProjectCard.edges.map((edge) => {
        return (
          <>
            <Link to={`/${edge.node.slug}`}>
              <ProjectCard
                background={edge.node.background}
                title={edge.node.title}
                description={edge.node.subtitle}
              />
            </Link>
          </>
        )
      })}
    </ProjectSectionContainer>
  )
}
export default ProjectSection