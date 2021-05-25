import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsTopSection from '../components/projectdetailstop'
import DetailsNavbar from '../components/navbarprojectdetails'
import DetailsDescription from '../components/projectdetailsdescription'
import { DescriptionContainer } from '../components/detailsdescriptioncontainer'
import ToTopNavbar from '../components/totopnavbar'

const ProjectKapi = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulEvent {
      background
      titleTop
      titleColor
      titleOne
      subtitleOne
      descriptionOne {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      subtitleTwo
      descriptionTwo {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      creditsOne {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      imageOne {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
    }
  } 
  `
  )
  return (

    <Layout>
      <SEO title="Event" />
      <DetailsTopSection
        background={data.contentfulEvent.background}
        title={data.contentfulEvent.titleTop}
      />
      <DetailsNavbar
        linkleft="/regionstockholm"
        linkright="/arkitektur"
      />
      <DescriptionContainer>
        <div className="case-container">
          <DetailsDescription
            color={data.contentfulEvent.titleColor}
            title={data.contentfulEvent.titleOne}
            subtitle={data.contentfulEvent.subtitleOne}
            description={data.contentfulEvent.descriptionOne.childMarkdownRemark.rawMarkdownBody}
            subtitle2={data.contentfulEvent.subtitleTwo}
            description2={data.contentfulEvent.descriptionTwo.childMarkdownRemark.rawMarkdownBody}
            credits={data.contentfulEvent.creditsOne.childMarkdownRemark.rawMarkdownBody} />
          <Img className="case-image" fluid={data.contentfulEvent.imageOne.fluid} alt="kapi" />
        </div>
      </DescriptionContainer>
      <ToTopNavbar linktotop="/event#top" title="Event" />
    </Layout>
  )

}
export default ProjectKapi