import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsTopSection from '../components/projectdetailstop'
import DetailsNavbar from '../components/navbarprojectdetails'

const GrayDivider = styled.div`
  width: 100%;
  margin-bottom: 24px;
  margin-top: 24px;
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
        background={data.contentfulArkitektur.background}
        title={data.contentfulArkitektur.titleTop} />
      <DetailsNavbar
        linkleft="/detailskapi"
        linkright="/detailsvardguiden"
      />
      <section className="content-container">
        <Img className="architecture-image" fluid={data.contentfulArkitektur.imageOne.fluid} alt="arkitektur" />
        <GrayDivider />
        <Img className="architecture-image" fluid={data.contentfulArkitektur.imageTwo.fluid} alt="arkitektur" />
        <GrayDivider />
        <Img className="architecture-image" fluid={data.contentfulArkitektur.imageThree.fluid} alt="arkitektur" />
      </section>
    </Layout>
  )

}
export default ProjectDetailsArkitektur