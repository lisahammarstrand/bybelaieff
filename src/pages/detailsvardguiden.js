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
 /*  background-image: linear-gradient(to right, #d9d9d9 , white); */
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
        <DetailsDescription
          color={data.contentfulProjectDetailsVardguiden.titleColor}
          title={data.contentfulProjectDetailsVardguiden.titleOne}
          title2={data.contentfulProjectDetailsVardguiden.subtitleOne}
          description={data.contentfulProjectDetailsVardguiden.descriptionOne.childMarkdownRemark.rawMarkdownBody}
          credits={data.contentfulProjectDetailsVardguiden.creditsOne.childMarkdownRemark.rawMarkdownBody}
        />
        <Img fixed={data.contentfulProjectDetailsVardguiden.imageOne.fixed} alt="vardguiden_1177" />
        <DetailsDescription
          color={data.contentfulProjectDetailsVardguiden.titleColor}
          title={data.contentfulProjectDetailsVardguiden.titleTwo}
          title2={data.contentfulProjectDetailsVardguiden.subtitleTwo}
          description={data.contentfulProjectDetailsVardguiden.descriptionTwo.childMarkdownRemark.rawMarkdownBody}
          credits={data.contentfulProjectDetailsVardguiden.creditsTwo.childMarkdownRemark.rawMarkdownBody}
        />
        <Img fixed={data.contentfulProjectDetailsVardguiden.imageTwo.fixed} alt="vardguiden_1177" />
      </DescriptionContainer>
    </Layout>
  )

}
export default ProjectDetailsVardguiden