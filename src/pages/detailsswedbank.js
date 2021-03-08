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
      creditsOne {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      imageOne {
        fixed(quality: 100, width: 225) {
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
        fixed(quality: 100, width: 225) {
          ...GatsbyContentfulFixed
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
        <DetailsDescription
          color={data.contentfulProjectDetailsSwedbank.titleColor}
          title={data.contentfulProjectDetailsSwedbank.titleOne}
          title2={data.contentfulProjectDetailsSwedbank.subtitleOne}
          description={data.contentfulProjectDetailsSwedbank.descriptionOne.childMarkdownRemark.rawMarkdownBody}
          credits={data.contentfulProjectDetailsSwedbank.creditsOne.childMarkdownRemark.rawMarkdownBody}
        />
        <Img fixed={data.contentfulProjectDetailsSwedbank.imageOne.fixed} alt="swedbank" />
        <DetailsDescription
          color={data.contentfulProjectDetailsSwedbank.titleColor}
          title={data.contentfulProjectDetailsSwedbank.titleTwo}
          title2={data.contentfulProjectDetailsSwedbank.subtitleTwo}
          description={data.contentfulProjectDetailsSwedbank.descriptionTwo.childMarkdownRemark.rawMarkdownBody}
          credits={data.contentfulProjectDetailsSwedbank.creditsTwo.childMarkdownRemark.rawMarkdownBody}
        />
        <Img fixed={data.contentfulProjectDetailsSwedbank.imageTwo.fixed} alt="swedbank" />
      </DescriptionContainer>
    </Layout>
  )

}
export default ProjectDetailsSwedbank