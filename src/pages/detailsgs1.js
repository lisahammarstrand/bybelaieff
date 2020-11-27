import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsToppSection from '../components/projectdetailstopp'
import DetailsImageSection from '../components/projectdetailsimage'
import DetailsDescription from '../components/projectdetailsdescription'
import { ShowCaseContainer } from '../lib/showcasecontainer'

const ProjectDetailsGS1 = () => {
  const data = useStaticQuery(
    graphql`
   {
      allContentfulFeaturedProjectDetailsGs1 {
        edges {
          node {
            title
            shortDescription
            heroImage {
              fluid(quality: 100) {
                ...GatsbyContentfulFluid
              }
            }
            secondTitle
            secondDescription {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
          }
        }
      }
    }
    `
  )
  console.log("data", data)

  return (
    < Layout >
      <SEO title="Project Details" />
      {data.allContentfulFeaturedProjectDetailsGs1.edges.map((edge, i) => {
        return (
          <ShowCaseContainer key={i}>
            <DetailsToppSection
              background="#1F363D"
              title={edge.node.title}
              description={edge.node.shortDescription}
            />
            <DetailsImageSection
              image={edge.node.heroImage.fluid}
            />
            <DetailsDescription
              color="#1F363D"
              title={edge.node.secondTitle}
              description={edge.node.secondDescription.childMarkdownRemark.rawMarkdownBody}
            />
          </ShowCaseContainer>
        )
      })
      }
    </Layout >
  )
}
export default ProjectDetailsGS1
