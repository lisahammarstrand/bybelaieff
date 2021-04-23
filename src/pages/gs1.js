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

const ProjectGS1 = () => {
  const data = useStaticQuery(
    graphql`
   {
    contentfulGs1 {
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
    < Layout >
      <SEO title="GS1" />
      <DetailsTopSection
        background={data.contentfulGs1.background}
        title={data.contentfulGs1.titleTop}
      />
      <DetailsNavbar
        linkleft="/swedbank"
        linkright="/utbildningsmaterial"
      />
      <DescriptionContainer>
        <div className="case-container">
          <DetailsDescription
            color={data.contentfulGs1.titleColor}
            title={data.contentfulGs1.titleOne}
            subtitle={data.contentfulGs1.subtitleOne}
            description={data.contentfulGs1.descriptionOne.childMarkdownRemark.rawMarkdownBody}
            subtitle2={data.contentfulGs1.subtitleTwo}
            description2={data.contentfulGs1.descriptionTwo.childMarkdownRemark.rawMarkdownBody}
            credits={data.contentfulGs1.creditsOne.childMarkdownRemark.rawMarkdownBody}
          />
          <Img className="case-image" fluid={data.contentfulGs1.imageOne.fluid} alt="gs_one" />
        </div>
      </DescriptionContainer>
      <ToTopNavbar linktotop="/gs1#top" title="GS1" />

    </Layout >
  )
}
export default ProjectGS1
