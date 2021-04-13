import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsTopSection from '../components/projectdetailstop'
import DetailsNavbar from '../components/navbarprojectdetails'
import SectionDescription from '../components/sectiondetailsdescription'
import ToTopNavbar from '../components/totopnavbar'

const GrayDivider = styled.div`
  width: 90%;
  margin-bottom: 24px;
  margin-top: 24px;
  border-bottom: 2px solid lightgray;
  `

const ProjectDetailsUtbildningsMaterial = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulUtbildningsmaterial {
      background
      titleTop
      title1
      descriptionOne {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      imageOne {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyContentfulFluid
        }
      }
      title2
      description2 {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      imageTwo {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyContentfulFluid
        }
      }
      title3
      description3 {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      imageThree {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyContentfulFluid
        }
      }
      title4
      description4 {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      imageFour {
        fluid(quality: 100, maxWidth: 1920) {
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
        background={data.contentfulUtbildningsmaterial.background}
        title={data.contentfulUtbildningsmaterial.titleTop}
      />
      <DetailsNavbar
        linkleft="/detailsgs1"
        linkright="/detailsregionstockholm"
      />
      <section className="content-container">
        <SectionDescription
          color={data.contentfulUtbildningsmaterial.background}
          title={data.contentfulUtbildningsmaterial.title1}
          credits={data.contentfulUtbildningsmaterial.descriptionOne.childMarkdownRemark.rawMarkdownBody}
        />
        <Img className="education-image" fluid={data.contentfulUtbildningsmaterial.imageOne.fluid} alt="utbildningsmaterial" />
        <GrayDivider />
        <SectionDescription
          color={data.contentfulUtbildningsmaterial.background}
          title={data.contentfulUtbildningsmaterial.title2}
          credits={data.contentfulUtbildningsmaterial.description2.childMarkdownRemark.rawMarkdownBody}
        />
        <Img className="education-image" fluid={data.contentfulUtbildningsmaterial.imageTwo.fluid} alt="utbildningsmaterial" />
        <GrayDivider />
        <SectionDescription
          color={data.contentfulUtbildningsmaterial.background}
          title={data.contentfulUtbildningsmaterial.title3}
          credits={data.contentfulUtbildningsmaterial.description3.childMarkdownRemark.rawMarkdownBody}
        />
        <Img className="education-image" fluid={data.contentfulUtbildningsmaterial.imageThree.fluid} alt="utbildningsmaterial" />
        <GrayDivider />
        <SectionDescription
          color={data.contentfulUtbildningsmaterial.background}
          title={data.contentfulUtbildningsmaterial.title4}
          credits={data.contentfulUtbildningsmaterial.description4.childMarkdownRemark.rawMarkdownBody}
        />
        <Img className="education-image" fluid={data.contentfulUtbildningsmaterial.imageFour.fluid} alt="utbildningsmaterial" />
      </section>
      <ToTopNavbar linktotop="/detailsutbildningsmaterial#top" title="Utbildningsmaterial" />
    </Layout>
  )

}
export default ProjectDetailsUtbildningsMaterial