import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsTopSection from '../components/projectdetailstop'
import DetailsNavbar from '../components/navbarprojectdetails'
import DetailsDescription from '../components/projectdetailsdescription'
import { ShowCaseContainer } from '../lib/showcasecontainer'

const ProjectDetailsGS1 = () => {
  const data = useStaticQuery(
    graphql`
   {
    contentfulFeaturedProjectDetailsGs1 {
      title
      shortDescription
      heroImage {
        fluid(quality: 100, maxWidth:1920) {
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
    `
  )

  return (
    < Layout >
      <SEO title="Project Details" />
      <ShowCaseContainer>
        <DetailsTopSection
          background="#4a7351"
          title={data.contentfulFeaturedProjectDetailsGs1.title}
          description={data.contentfulFeaturedProjectDetailsGs1.shortDescription}
        />
        <DetailsNavbar />
        <Img className="detail-image" fluid={data.contentfulFeaturedProjectDetailsGs1.heroImage.fluid} />
        <DetailsDescription
          color="#4a7351"
          title={data.contentfulFeaturedProjectDetailsGs1.secondTitle}
          description={data.contentfulFeaturedProjectDetailsGs1.secondDescription.childMarkdownRemark.rawMarkdownBody}
        />
      </ShowCaseContainer>
    </Layout >
  )
}
export default ProjectDetailsGS1
