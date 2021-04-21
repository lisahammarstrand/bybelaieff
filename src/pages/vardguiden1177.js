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

const ProjectVardguiden = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulVardguiden1177 {
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
        background={data.contentfulVardguiden1177.background}
        title={data.contentfulVardguiden1177.titleTop} />
      <DetailsNavbar
        linkleft="/arkitektur"
        linkright="/rorligt"
      />
      <DescriptionContainer>
        <div className="case-container">
          <DetailsDescription
            color={data.contentfulVardguiden1177.titleColor}
            title={data.contentfulVardguiden1177.titleOne}
            subtitle={data.contentfulVardguiden1177.subtitleOne}
            description={data.contentfulVardguiden1177.descriptionOne.childMarkdownRemark.rawMarkdownBody}
            subtitle2={data.contentfulVardguiden1177.subtitleTwo}
            description2={data.contentfulVardguiden1177.descriptionTwo.childMarkdownRemark.rawMarkdownBody}
            credits={data.contentfulVardguiden1177.creditsOne.childMarkdownRemark.rawMarkdownBody}
          />
          <Img className="case-image" fluid={data.contentfulVardguiden1177.imageOne.fluid} alt="vardguiden_1177" />
        </div>
      </DescriptionContainer>
      <ToTopNavbar linktotop="/vardguiden1177#top" title="Vårdguiden" />
    </Layout>
  )

}
export default ProjectVardguiden