import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsTopSection from '../components/projectdetailstop'
import DetailsNavbar from '../components/navbarprojectdetails'
import ToTopNavbar from '../components/totopnavbar'


const GrayDivider = styled.div`
  width: 90%;
  margin: 0;
  border-bottom: 2px solid lightgray;
  `

const ProjectDetailsGrafiskaProfilprogram = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulGrafiskaProfilprogram {
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
      imageFour {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyContentfulFluid
        }
      }
      imageFive {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyContentfulFluid
        }
      }
      imageSix {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyContentfulFluid
        }
      }
      imageSeven {
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
        background={data.contentfulGrafiskaProfilprogram.background}
        title={data.contentfulGrafiskaProfilprogram.titleTop}
      />
      <DetailsNavbar
        linkleft="/"
        linkright="/detailstradgardsmassan"
      />
      <section className="content-container">
        <Img className="visualid-image" fluid={data.contentfulGrafiskaProfilprogram.imageOne.fluid} alt="grafisk_profil_sea_breeze" />
        <GrayDivider />
        <Img className="visualid-image" fluid={data.contentfulGrafiskaProfilprogram.imageTwo.fluid} alt="grafisk_profil_sea_sodertandlakarna" />
        <GrayDivider />
        <Img className="visualid-image" fluid={data.contentfulGrafiskaProfilprogram.imageThree.fluid} alt="grafisk_profil_movement" />
        <GrayDivider />
        <Img className="visualid-image" fluid={data.contentfulGrafiskaProfilprogram.imageFour.fluid} alt="grafisk_profil_stockholms_regionens" />
        <GrayDivider />
        <Img className="visualid-image" fluid={data.contentfulGrafiskaProfilprogram.imageFive.fluid} alt="grafisk_profil_sea_bright" />
        <GrayDivider />
        <Img className="visualid-image" fluid={data.contentfulGrafiskaProfilprogram.imageSix.fluid} alt="grafisk_profil_om_shanti" />
        <GrayDivider />
        <Img className="visualid-image" fluid={data.contentfulGrafiskaProfilprogram.imageSeven.fluid} alt="grafisk_profil_valideringsforum" />
      </section>
      <ToTopNavbar />
    </Layout>
  )

}
export default ProjectDetailsGrafiskaProfilprogram