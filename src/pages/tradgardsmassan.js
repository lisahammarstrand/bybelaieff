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

const ProjectTradgardsMassan = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulTradgardsmassan {
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
      creditsOne {
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
      imageOne {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      imageTwo {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`)
  return (
    <Layout>
      <SEO title="Trädgårdsmässan" />
      <DetailsTopSection
        background={data.contentfulTradgardsmassan.background}
        title={data.contentfulTradgardsmassan.titleTop} />
      <DetailsNavbar
        linkleft="/grafiskaprofilprogram"
        linkright="/swedbank" />
      <DescriptionContainer>
        <div className="case-container">
          <DetailsDescription
            color={data.contentfulTradgardsmassan.titleColor}
            title={data.contentfulTradgardsmassan.titleOne}
            subtitle={data.contentfulTradgardsmassan.subtitleOne}
            description={data.contentfulTradgardsmassan.descriptionOne.childMarkdownRemark.rawMarkdownBody}
            subtitle2={data.contentfulTradgardsmassan.subtitleTwo}
            description2={data.contentfulTradgardsmassan.descriptionTwo.childMarkdownRemark.rawMarkdownBody}
            credits={data.contentfulTradgardsmassan.creditsOne.childMarkdownRemark.rawMarkdownBody}
          />
          <Img className="case-image" fluid={data.contentfulTradgardsmassan.imageOne.fluid} alt="trädgårdsmässan_2014" />
          <Img className="case-image" fluid={data.contentfulTradgardsmassan.imageTwo.fluid} alt="trädgårdsmässan_2015" />
        </div>
      </DescriptionContainer>
      <ToTopNavbar linktotop="/tradgardsmassan#top" title="Trädgårdsmässan" />
    </Layout>
  )
}
export default ProjectTradgardsMassan