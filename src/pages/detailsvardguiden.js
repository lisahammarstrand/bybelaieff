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

const ProjectDetailsVardguiden = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulProjectDetailsVardguiden {
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
      subtitleTwo
      descriptionTwo {
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
  `
  )
  return (

    <Layout>
      <SEO title="Project Details" />
      <DetailsTopSection
        background={data.contentfulProjectDetailsVardguiden.background}
        title={data.contentfulProjectDetailsVardguiden.titleTop} />
      <DetailsNavbar
        linkleft="/detailsarkitektur"
        linkright="/detailshallbarvardag"
      />
      <DescriptionContainer>
        <div className="case-container">
          <DetailsDescription
            color={data.contentfulProjectDetailsVardguiden.titleColor}
            title={data.contentfulProjectDetailsVardguiden.titleOne}
            subtitle={data.contentfulProjectDetailsVardguiden.subtitleOne}
            description={data.contentfulProjectDetailsVardguiden.descriptionOne.childMarkdownRemark.rawMarkdownBody}
            subtitle2={data.contentfulProjectDetailsVardguiden.subtitleTwo}
            description2={data.contentfulProjectDetailsVardguiden.descriptionTwo.childMarkdownRemark.rawMarkdownBody}
            credits={data.contentfulProjectDetailsVardguiden.creditsOne.childMarkdownRemark.rawMarkdownBody}
          />
          <Img className="case-image" fluid={data.contentfulProjectDetailsVardguiden.imageOne.fluid} alt="vardguiden_1177" />
        </div>
      </DescriptionContainer>
      <ToTopNavbar linktotop="/detailsvardguiden#top" title="Vårdguiden" />
    </Layout>
  )

}
export default ProjectDetailsVardguiden