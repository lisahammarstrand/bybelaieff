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

const ProjectSetterwalls = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulSetterwalls {
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
  `)
  return (

    <Layout>
      <SEO title="Setterwalls" />
      <DetailsTopSection
        background={data.contentfulSetterwalls.background}
        title={data.contentfulSetterwalls.titleTop} />
      <DetailsNavbar
        linkleft="/rorligt"
        linkright="/ovrigt"
      />
      <DescriptionContainer>
        <div className="case-container">
          <DetailsDescription
            color={data.contentfulSetterwalls.titleColor}
            title={data.contentfulSetterwalls.titleOne}
            subtitle={data.contentfulSetterwalls.subtitleOne}
            description={data.contentfulSetterwalls.descriptionOne.childMarkdownRemark.rawMarkdownBody}
            subtitle2={data.contentfulSetterwalls.subtitleTwo}
            description2={data.contentfulSetterwalls.descriptionTwo.childMarkdownRemark.rawMarkdownBody}
            credits={data.contentfulSetterwalls.creditsOne.childMarkdownRemark.rawMarkdownBody}
          />
          <Img className="case-image" fluid={data.contentfulSetterwalls.imageOne.fluid} alt="setterwalls" />
        </div>
      </DescriptionContainer>
      <ToTopNavbar linktotop="/setterwalls#top" title="Setterwalls" />
    </Layout>
  )

}
export default ProjectSetterwalls