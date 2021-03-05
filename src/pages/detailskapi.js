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
/*   background-image: linear-gradient(to right, #d9d9d9 , white); */
  `

const ProjectDetailsKapi = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulProjectDetailsKapi {
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

    <Layout>
      <SEO title="Project Details" />
      <DetailsTopSection
        background={data.contentfulProjectDetailsKapi.background}
        title={data.contentfulProjectDetailsKapi.titleTop}
      />
      <DetailsNavbar
        linkleft="/detailsregionstockholm"
        linkright="/detailsarkitektur"
      />
      <DescriptionContainer>
        <DetailsDescription
          color={data.contentfulProjectDetailsKapi.titleColor}
          title={data.contentfulProjectDetailsKapi.titleOne}
          title2={data.contentfulProjectDetailsKapi.subtitleOne}
          description={data.contentfulProjectDetailsKapi.descriptionOne.childMarkdownRemark.rawMarkdownBody}
          credits={data.contentfulProjectDetailsKapi.creditsOne.childMarkdownRemark.rawMarkdownBody} />
        <Img fixed={data.contentfulProjectDetailsKapi.imageOne.fixed} alt="kapi" />
      </DescriptionContainer>
    </Layout>
  )

}
export default ProjectDetailsKapi