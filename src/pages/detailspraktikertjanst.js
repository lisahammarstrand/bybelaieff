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

const ProjectDetailsPraktikertjanst = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulProjectDetailsPraktikertjanst {
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
        background={data.contentfulProjectDetailsPraktikertjanst.background}
        title={data.contentfulProjectDetailsPraktikertjanst.titleTop} />
      <DetailsNavbar
        linkleft="/detailssetterwalls"
        linkright="/"
      />
      <DescriptionContainer>
        <DetailsDescription
          color={data.contentfulProjectDetailsPraktikertjanst.titleColor}
          title={data.contentfulProjectDetailsPraktikertjanst.titleOne}
          title2={data.contentfulProjectDetailsPraktikertjanst.subtitleOne}
          description={data.contentfulProjectDetailsPraktikertjanst.descriptionOne.childMarkdownRemark.rawMarkdownBody}
          credits={data.contentfulProjectDetailsPraktikertjanst.creditsOne.childMarkdownRemark.rawMarkdownBody}
        />
        <Img fixed={data.contentfulProjectDetailsPraktikertjanst.imageOne.fixed} alt="praktikertjänst" />
      </DescriptionContainer>
    </Layout>
  )

}
export default ProjectDetailsPraktikertjanst