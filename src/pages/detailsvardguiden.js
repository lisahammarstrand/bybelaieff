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

const ProjectDetailsVardguiden = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulProjectDetailsVardguiden {
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
  `
  )
  return (

    <Layout>
      <SEO title="Project Details" />
      <DetailsTopSection
        background={data.contentfulProjectDetailsVardguiden.background}
        title={data.contentfulProjectDetailsVardguiden.titleTop} />
      <DetailsNavbar
        linkleft="/detailsarkitektur"
        linkright="/detailshallbarvardag"
      />
      <DescriptionContainer>
        <div className="case-container">
          <DetailsDescription
            color={data.contentfulProjectDetailsVardguiden.titleColor}
            title={data.contentfulProjectDetailsVardguiden.titleOne}
            title2={data.contentfulProjectDetailsVardguiden.subtitleOne}
            description={data.contentfulProjectDetailsVardguiden.descriptionOne.childMarkdownRemark.rawMarkdownBody}
            credits={data.contentfulProjectDetailsVardguiden.creditsOne.childMarkdownRemark.rawMarkdownBody}
          />
          <Img className="case-image" fluid={data.contentfulProjectDetailsVardguiden.imageOne.fluid} alt="vardguiden_1177" />
          <DetailsDescription
            color={data.contentfulProjectDetailsVardguiden.titleColor}
            title={data.contentfulProjectDetailsVardguiden.titleTwo}
            title2={data.contentfulProjectDetailsVardguiden.subtitleTwo}
            description={data.contentfulProjectDetailsVardguiden.descriptionTwo.childMarkdownRemark.rawMarkdownBody}
            credits={data.contentfulProjectDetailsVardguiden.creditsTwo.childMarkdownRemark.rawMarkdownBody}
          />
          <Img className="case-image" fluid={data.contentfulProjectDetailsVardguiden.imageTwo.fluid} alt="vardguiden_1177" />
        </div>
      </DescriptionContainer>
    </Layout>
  )

}
export default ProjectDetailsVardguiden