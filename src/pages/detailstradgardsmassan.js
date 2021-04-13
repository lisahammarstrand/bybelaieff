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

const ProjectDetailsTradgardsMassan = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulProjectDetailsTradgardsmassan {
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
      <SEO title="Project Details" />
      <DetailsTopSection
        background={data.contentfulProjectDetailsTradgardsmassan.background}
        title={data.contentfulProjectDetailsTradgardsmassan.titleTop} />
      <DetailsNavbar
        linkleft="/detailsgrafiskaprofilprogram"
        linkright="/detailsswedbank" />
      <DescriptionContainer>
        <div className="case-container">
          <DetailsDescription
            color={data.contentfulProjectDetailsTradgardsmassan.titleColor}
            title={data.contentfulProjectDetailsTradgardsmassan.titleOne}
            subtitle={data.contentfulProjectDetailsTradgardsmassan.subtitleOne}
            description={data.contentfulProjectDetailsTradgardsmassan.descriptionOne.childMarkdownRemark.rawMarkdownBody}
            subtitle2={data.contentfulProjectDetailsTradgardsmassan.subtitleTwo}
            description2={data.contentfulProjectDetailsTradgardsmassan.descriptionTwo.childMarkdownRemark.rawMarkdownBody}
            credits={data.contentfulProjectDetailsTradgardsmassan.creditsOne.childMarkdownRemark.rawMarkdownBody}
          />
          <Img className="case-image" fluid={data.contentfulProjectDetailsTradgardsmassan.imageOne.fluid} alt="trädgårdsmässan_2014" />
          <Img className="case-image" fluid={data.contentfulProjectDetailsTradgardsmassan.imageTwo.fluid} alt="trädgårdsmässan_2015" />
        </div>
      </DescriptionContainer>
      <ToTopNavbar linktotop="/detailstradgardsmassan#top" title="Trädgårdsmässan" />
    </Layout>
  )
}
export default ProjectDetailsTradgardsMassan