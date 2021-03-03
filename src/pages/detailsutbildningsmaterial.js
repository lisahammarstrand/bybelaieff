import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsTopSection from '../components/projectdetailstop'
import DetailsNavbar from '../components/navbarprojectdetails'
import DetailsDescription from '../components/projectdetailsdescription'

const GrayDivider = styled.div`
  width: 90%;
  margin: 0;
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

      <Img fluid={data.contentfulUtbildningsmaterial.imageOne.fluid} alt="utbildningsmaterial" />
      <GrayDivider />

    </Layout>
  )

}
export default ProjectDetailsUtbildningsMaterial