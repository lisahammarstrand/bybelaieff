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
    contentfulKapi {
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
      <SEO title="Project Details" />
      <DetailsTopSection
        background={data.contentfulKapi.background}
        title={data.contentfulKapi.titleTop}
      />
      <DetailsNavbar
        linkleft="/regionstockholm"
        linkright="/arkitektur"
      />
      <DescriptionContainer>
        <div className="case-container">
          <DetailsDescription
            color={data.contentfulKapi.titleColor}
            title={data.contentfulKapi.titleOne}
            subtitle={data.contentfulKapi.subtitleOne}
            description={data.contentfulKapi.descriptionOne.childMarkdownRemark.rawMarkdownBody}
            subtitle2={data.contentfulKapi.subtitleTwo}
            description2={data.contentfulKapi.descriptionTwo.childMarkdownRemark.rawMarkdownBody}
            credits={data.contentfulKapi.creditsOne.childMarkdownRemark.rawMarkdownBody} />
          <Img className="case-image" fluid={data.contentfulKapi.imageOne.fluid} alt="kapi" />
        </div>
      </DescriptionContainer>
      <ToTopNavbar linktotop="/kapi#top" title="Kapi" />
    </Layout>
  )

}
export default ProjectKapi