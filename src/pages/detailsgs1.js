import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsToppSection from '../components/projectdetailstopp'
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
  console.log("data", data)

  return (
    < Layout >
      <SEO title="Project Details" />
      <ShowCaseContainer>
        <DetailsToppSection
          background="#1F363D"
          title={data.contentfulFeaturedProjectDetailsGs1.title}
          description={data.contentfulFeaturedProjectDetailsGs1.shortDescription}
        />
        <Img className="detail-image" fluid={data.contentfulFeaturedProjectDetailsGs1.heroImage.fluid} />
        <DetailsDescription
          color="#1F363D"
          title={data.contentfulFeaturedProjectDetailsGs1.secondTitle}
          description={data.contentfulFeaturedProjectDetailsGs1.secondDescription.childMarkdownRemark.rawMarkdownBody}
        />
      </ShowCaseContainer>
    </Layout >
  )
}
export default ProjectDetailsGS1
