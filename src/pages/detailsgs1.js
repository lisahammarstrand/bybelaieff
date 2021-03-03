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
  background-image: linear-gradient(to right, #d9d9d9 , white);
  `

const ProjectDetailsGS1 = () => {
  const data = useStaticQuery(
    graphql`
   {
    contentfulProjectDetailsGs1 {
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
    }
  }
    `
  )

  return (
    < Layout >
      <SEO title="Project Details" />
      <DetailsTopSection
        background={data.contentfulProjectDetailsGs1.background}
        title={data.contentfulProjectDetailsGs1.titleTop}
      />
      <DetailsNavbar
        linkleft="/detailsswedbank"
        linkright="/detailsutbildningsmaterial"
      />
      <DescriptionContainer>
        <DetailsDescription
          color={data.contentfulProjectDetailsGs1.titleColor}
          title={data.contentfulProjectDetailsGs1.titleOne}
          title2={data.contentfulProjectDetailsGs1.subtitleOne}
          description={data.contentfulProjectDetailsGs1.descriptionOne.childMarkdownRemark.rawMarkdownBody}
          credits={data.contentfulProjectDetailsGs1.creditsOne.childMarkdownRemark.rawMarkdownBody}
        />
        <Img fixed={data.contentfulProjectDetailsGs1.imageOne.fixed} alt="gs_one" />
      </DescriptionContainer>

    </Layout >
  )
}
export default ProjectDetailsGS1
