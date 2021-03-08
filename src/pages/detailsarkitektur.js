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
  margin: 0;
  border-bottom: 2px solid lightgray;
  `

const ProjectDetailsArkitektur = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulArkitektur {
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
        background={data.contentfulArkitektur.background}
        title={data.contentfulArkitektur.titleTop} />
      <DetailsNavbar
        linkleft="/detailskapi"
        linkright="/detailsvardguiden"
      />
      <Img fluid={data.contentfulArkitektur.imageOne.fluid} alt="arkitektur" />
      <GrayDivider />
    </Layout>
  )

}
export default ProjectDetailsArkitektur