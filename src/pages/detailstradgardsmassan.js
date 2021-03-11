import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsTopSection from '../components/projectdetailstop'
import DetailsNavbar from '../components/navbarprojectdetails'
import DetailsDescription from '../components/projectdetailsdescription'

const DescriptionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `

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
      imageOne {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      titleTwo
      subtitleTwo
      descriptionTwo {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      creditsTwo {
        childMarkdownRemark {
          rawMarkdownBody
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
            title2={data.contentfulProjectDetailsTradgardsmassan.subtitleOne}
            description={data.contentfulProjectDetailsTradgardsmassan.descriptionOne.childMarkdownRemark.rawMarkdownBody}
            credits={data.contentfulProjectDetailsTradgardsmassan.creditsOne.childMarkdownRemark.rawMarkdownBody}
          />
          <Img className="case-image" fluid={data.contentfulProjectDetailsTradgardsmassan.imageOne.fluid} alt="trädgårdsmässan_2014" />
          <DetailsDescription
            color={data.contentfulProjectDetailsTradgardsmassan.titleColor}
            title={data.contentfulProjectDetailsTradgardsmassan.titleTwo}
            title2={data.contentfulProjectDetailsTradgardsmassan.subtitleTwo}
            description={data.contentfulProjectDetailsTradgardsmassan.descriptionTwo.childMarkdownRemark.rawMarkdownBody}
            credits={data.contentfulProjectDetailsTradgardsmassan.creditsTwo.childMarkdownRemark.rawMarkdownBody}
          />
          <Img className="case-image" fluid={data.contentfulProjectDetailsTradgardsmassan.imageTwo.fluid} alt="trädgårdsmässan_2015" />
        </div>
      </DescriptionContainer>
    </Layout>
  )
}
export default ProjectDetailsTradgardsMassan