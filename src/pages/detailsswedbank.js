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

const ProjectDetailsSwedbank = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulProjectDetailsSwedbank {
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
  }`
  )
  return (

    <Layout>
      <SEO title="Project Details" />
      <DetailsTopSection
        background={data.contentfulProjectDetailsSwedbank.background}
        title={data.contentfulProjectDetailsSwedbank.titleTop} />
      <DetailsNavbar
        linkleft="/detailstradgardsmassan"
        linkright="/detailsgs1"
      />
      <DescriptionContainer>
        <div className="case-container">
          <DetailsDescription
            color={data.contentfulProjectDetailsSwedbank.titleColor}
            title={data.contentfulProjectDetailsSwedbank.titleOne}
            subtitle={data.contentfulProjectDetailsSwedbank.subtitleOne}
            description={data.contentfulProjectDetailsSwedbank.descriptionOne.childMarkdownRemark.rawMarkdownBody}
            subtitle2={data.contentfulProjectDetailsSwedbank.subtitleTwo}
            description2={data.contentfulProjectDetailsSwedbank.descriptionTwo.childMarkdownRemark.rawMarkdownBody}
            credits={data.contentfulProjectDetailsSwedbank.creditsOne.childMarkdownRemark.rawMarkdownBody}
          />
          <Img className="case-image" fluid={data.contentfulProjectDetailsSwedbank.imageOne.fluid} alt="swedbank" />
        </div>
      </DescriptionContainer>
      <ToTopNavbar />
    </Layout>
  )

}
export default ProjectDetailsSwedbank