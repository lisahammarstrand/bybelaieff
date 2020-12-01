import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsTopSection from '../components/projectdetailstop'
import DetailsDescription from '../components/projectdetailsdescription'


const ProjectDetailsIloveMe = () => {
  const data = useStaticQuery(
    graphql`
    {
      contentfulFeaturedProjectDetailsILoveMe {
        title
        shortDescription
        heroImage {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyContentfulFluid
          }
        }
        secondTitle
        secondDescription {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
        secondImage {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    `
  )
  return (
    <Layout>
      <SEO title="Project Details" />
      <DetailsTopSection
        background="#40798C"
        title={data.contentfulFeaturedProjectDetailsILoveMe.title}
        description={data.contentfulFeaturedProjectDetailsILoveMe.shortDescription}
      />
      <Img className="details-image" fluid={data.contentfulFeaturedProjectDetailsILoveMe.heroImage.fluid}
      />
      <DetailsDescription
        color="#40798C"
        title={data.contentfulFeaturedProjectDetailsILoveMe.secondTitle}
        description={data.contentfulFeaturedProjectDetailsILoveMe.secondDescription.childMarkdownRemark.rawMarkdownBody}
      />
      <Img className="details-image" fluid={data.contentfulFeaturedProjectDetailsILoveMe.secondImage.fluid} />
    </Layout>
  )

}
export default ProjectDetailsIloveMe