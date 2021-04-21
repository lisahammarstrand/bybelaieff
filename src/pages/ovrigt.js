import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsTopSection from '../components/projectdetailstop'
import DetailsNavbar from '../components/navbarprojectdetails'
import DetailsDescription from '../components/projectdetailsdescription'
import { DescriptionContainer } from '../components/detailsdescriptioncontainer'
import ToTopNavbar from '../components/totopnavbar'

const ProjectsMiscellaneous = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulOvrigt {
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
        background={data.contentfulOvrigt.background}
        title={data.contentfulOvrigt.titleTop} />
      <DetailsNavbar
        linkleft="/setterwalls"
        linkright="/"
      />
      <DescriptionContainer>
        <div className="case-container">
          <DetailsDescription
            color={data.contentfulOvrigt.titleColor}
            title={data.contentfulOvrigt.titleOne}
            subtitle={data.contentfulOvrigt.subtitleOne}
            description={data.contentfulOvrigt.descriptionOne.childMarkdownRemark.rawMarkdownBody}
            credits={data.contentfulOvrigt.creditsOne.childMarkdownRemark.rawMarkdownBody}
          />
          <Img className="case-image" fluid={data.contentfulOvrigt.imageOne.fluid} alt="praktikertjänst" />
        </div>
      </DescriptionContainer>
      <ToTopNavbar linktotop="/ovrigt#top" title="Övrigt" />
    </Layout>
  )

}
export default ProjectsMiscellaneous