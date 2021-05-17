import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
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

const ProjectsMiscellaneous = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulOvrigt {
      background
      titleTop
      titleColor
      titleOne
      descriptionOne {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      imageOne {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      titleTwo
      descriptionTwo {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      imageTwo {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
  `)
  return (

    <Layout>
      <SEO title="Övrigt" />
      <DetailsTopSection
        background={data.contentfulOvrigt.background}
        title={data.contentfulOvrigt.titleTop} />
      <DetailsNavbar
        linkleft="/setterwalls"
        linkright="/"
      />
      <section className="content-container">
        <SectionDescription
          color={data.contentfulOvrigt.background}
          title={data.contentfulOvrigt.titleOne}
          credits={data.contentfulOvrigt.descriptionOne.childMarkdownRemark.rawMarkdownBody}
        />
        <Img className="fullwidth-image" fluid={data.contentfulOvrigt.imageOne.fluid} alt="blommor i krukor" />
        <GrayDivider />
        <SectionDescription
          color={data.contentfulOvrigt.background}
          title={data.contentfulOvrigt.titleTwo}
          credits={data.contentfulOvrigt.descriptionTwo.childMarkdownRemark.rawMarkdownBody}
        />
        <Img className="fullwidth-image" fluid={data.contentfulOvrigt.imageTwo.fluid} alt="blommor i krukor" />
      </section>
      <ToTopNavbar linktotop="/ovrigt#top" title="Övrigt" />
    </Layout>
  )

}
export default ProjectsMiscellaneous