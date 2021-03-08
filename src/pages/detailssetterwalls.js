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

const ProjectDetailsSetterwalls = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulProjectDetailsSetterwalls {
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
  `)
  return (

    <Layout>
      <SEO title="Project Details" />
      <DetailsTopSection
        background={data.contentfulProjectDetailsSetterwalls.background}
        title={data.contentfulProjectDetailsSetterwalls.titleTop} />
      <DetailsNavbar
        linkleft="/detailshallbarvardag"
        linkright="/detailspraktikertjanst"
      />
      <DescriptionContainer>
        <DetailsDescription
          color={data.contentfulProjectDetailsSetterwalls.titleColor}
          title={data.contentfulProjectDetailsSetterwalls.titleOne}
          title2={data.contentfulProjectDetailsSetterwalls.subtitleOne}
          description={data.contentfulProjectDetailsSetterwalls.descriptionOne.childMarkdownRemark.rawMarkdownBody}
          credits={data.contentfulProjectDetailsSetterwalls.creditsOne.childMarkdownRemark.rawMarkdownBody}
        />
        <Img fixed={data.contentfulProjectDetailsSetterwalls.imageOne.fixed} alt="setterwalls" />
      </DescriptionContainer>
    </Layout>
  )

}
export default ProjectDetailsSetterwalls