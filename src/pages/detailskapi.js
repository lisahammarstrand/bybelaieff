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

const ProjectDetailsKapi = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulProjectDetailsKapi {
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
        background={data.contentfulProjectDetailsKapi.background}
        title={data.contentfulProjectDetailsKapi.titleTop}
      />
      <DetailsNavbar
        linkleft="/detailsregionstockholm"
        linkright="/detailsarkitektur"
      />
      <DescriptionContainer>
        <div className="case-container">
          <DetailsDescription
            color={data.contentfulProjectDetailsKapi.titleColor}
            title={data.contentfulProjectDetailsKapi.titleOne}
            subtitle={data.contentfulProjectDetailsKapi.subtitleOne}
            description={data.contentfulProjectDetailsKapi.descriptionOne.childMarkdownRemark.rawMarkdownBody}
            subtitle2={data.contentfulProjectDetailsKapi.subtitleTwo}
            description2={data.contentfulProjectDetailsKapi.descriptionTwo.childMarkdownRemark.rawMarkdownBody}
            credits={data.contentfulProjectDetailsKapi.creditsOne.childMarkdownRemark.rawMarkdownBody} />
          <Img className="case-image" fluid={data.contentfulProjectDetailsKapi.imageOne.fluid} alt="kapi" />
        </div>
      </DescriptionContainer>
      <ToTopNavbar linktotop="/detailskapi#top" title="Kapi" />
    </Layout>
  )

}
export default ProjectDetailsKapi