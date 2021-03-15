import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsTopSection from '../components/projectdetailstop'
import DetailsNavbar from '../components/navbarprojectdetails'
import DetailsDescription from '../components/projectdetailsdescription'
import { DescriptionContainer } from '../components/detailsdescriptioncontainer'


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
        fluid(quality: 100) {
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
        background={data.contentfulProjectDetailsPraktikertjanst.background}
        title={data.contentfulProjectDetailsPraktikertjanst.titleTop} />
      <DetailsNavbar
        linkleft="/detailssetterwalls"
        linkright="/"
      />
      <DescriptionContainer>
        <div className="case-container">
          <DetailsDescription
            color={data.contentfulProjectDetailsPraktikertjanst.titleColor}
            title={data.contentfulProjectDetailsPraktikertjanst.titleOne}
            title2={data.contentfulProjectDetailsPraktikertjanst.subtitleOne}
            description={data.contentfulProjectDetailsPraktikertjanst.descriptionOne.childMarkdownRemark.rawMarkdownBody}
            credits={data.contentfulProjectDetailsPraktikertjanst.creditsOne.childMarkdownRemark.rawMarkdownBody}
          />
          <Img className="case-image" fluid={data.contentfulProjectDetailsPraktikertjanst.imageOne.fluid} alt="praktikertjänst" />
        </div>
      </DescriptionContainer>
    </Layout>
  )

}
export default ProjectDetailsPraktikertjanst