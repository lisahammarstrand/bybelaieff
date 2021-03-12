import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsTopSection from '../components/projectdetailstop'
import DetailsNavbar from '../components/navbarprojectdetails'

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
      imageOne {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyContentfulFluid
        }
      }
      imageTwo {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyContentfulFluid
        }
      }
      imageThree {
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
        <Img className="education-image" fluid={data.contentfulUtbildningsmaterial.imageOne.fluid} alt="utbildningsmaterial" />
        <GrayDivider />
        <Img className="education-image" fluid={data.contentfulUtbildningsmaterial.imageTwo.fluid} alt="utbildningsmaterial" />
        <GrayDivider />
        <Img className="education-image" fluid={data.contentfulUtbildningsmaterial.imageThree.fluid} alt="utbildningsmaterial" />
      </section>
    </Layout>
  )

}
export default ProjectDetailsUtbildningsMaterial