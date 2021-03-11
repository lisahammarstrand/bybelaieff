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
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
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
        <div className="case-container">
          <DetailsDescription
            color={data.contentfulProjectDetailsGs1.titleColor}
            title={data.contentfulProjectDetailsGs1.titleOne}
            title2={data.contentfulProjectDetailsGs1.subtitleOne}
            description={data.contentfulProjectDetailsGs1.descriptionOne.childMarkdownRemark.rawMarkdownBody}
            credits={data.contentfulProjectDetailsGs1.creditsOne.childMarkdownRemark.rawMarkdownBody}
          />
          <Img className="case-image" fluid={data.contentfulProjectDetailsGs1.imageOne.fluid} alt="gs_one" />
        </div>
      </DescriptionContainer>

    </Layout >
  )
}
export default ProjectDetailsGS1
