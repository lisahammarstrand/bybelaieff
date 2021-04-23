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

const ProjectSwedbank = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulSwedbank {
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
      <SEO title="Swedbank" />
      <DetailsTopSection
        background={data.contentfulSwedbank.background}
        title={data.contentfulSwedbank.titleTop} />
      <DetailsNavbar
        linkleft="/tradgardsmassan"
        linkright="/gs1"
      />
      <DescriptionContainer>
        <div className="case-container">
          <DetailsDescription
            color={data.contentfulSwedbank.titleColor}
            title={data.contentfulSwedbank.titleOne}
            subtitle={data.contentfulSwedbank.subtitleOne}
            description={data.contentfulSwedbank.descriptionOne.childMarkdownRemark.rawMarkdownBody}
            subtitle2={data.contentfulSwedbank.subtitleTwo}
            description2={data.contentfulSwedbank.descriptionTwo.childMarkdownRemark.rawMarkdownBody}
            credits={data.contentfulSwedbank.creditsOne.childMarkdownRemark.rawMarkdownBody}
          />
          <Img className="case-image" fluid={data.contentfulSwedbank.imageOne.fluid} alt="swedbank" />
        </div>
      </DescriptionContainer>
      <ToTopNavbar linktotop="/swedbank#top" title="Swedbank" />
    </Layout>
  )

}
export default ProjectSwedbank