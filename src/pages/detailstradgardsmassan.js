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
  /* background-image: linear-gradient(to right, #d9d9d9 , white); */
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
        fixed(quality: 100, width: 756) {
          ...GatsbyContentfulFixed
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
        fixed(quality: 100, width: 756) {
          ...GatsbyContentfulFixed
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
        <DetailsDescription
          color={data.contentfulProjectDetailsTradgardsmassan.titleColor}
          title={data.contentfulProjectDetailsTradgardsmassan.titleOne}
          title2={data.contentfulProjectDetailsTradgardsmassan.subtitleOne}
          description={data.contentfulProjectDetailsTradgardsmassan.descriptionOne.childMarkdownRemark.rawMarkdownBody}
          credits={data.contentfulProjectDetailsTradgardsmassan.creditsOne.childMarkdownRemark.rawMarkdownBody}
        />
        <Img fixed={data.contentfulProjectDetailsTradgardsmassan.imageOne.fixed} alt="trädgårdsmässan_2014" />
        <DetailsDescription
          color={data.contentfulProjectDetailsTradgardsmassan.titleColor}
          title={data.contentfulProjectDetailsTradgardsmassan.titleTwo}
          title2={data.contentfulProjectDetailsTradgardsmassan.subtitleTwo}
          description={data.contentfulProjectDetailsTradgardsmassan.descriptionTwo.childMarkdownRemark.rawMarkdownBody}
          credits={data.contentfulProjectDetailsTradgardsmassan.creditsTwo.childMarkdownRemark.rawMarkdownBody}
        />
        <Img fixed={data.contentfulProjectDetailsTradgardsmassan.imageTwo.fixed} alt="trädgårdsmässan_2015" />
      </DescriptionContainer>
    </Layout>
  )
}
export default ProjectDetailsTradgardsMassan