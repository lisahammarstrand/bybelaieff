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

const ProjectDetailsSetterwalls = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulProjectDetailsSetterwalls {
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
  `)
  return (

    <Layout>
      <SEO title="Project Details" />
      <DetailsTopSection
        background={data.contentfulProjectDetailsSetterwalls.background}
        title={data.contentfulProjectDetailsSetterwalls.titleTop} />
      <DetailsNavbar
        linkleft="/detailshallbarvardag"
        linkright="/detailspraktikertjanst"
      />
      <DescriptionContainer>
        <div className="case-container">
          <DetailsDescription
            color={data.contentfulProjectDetailsSetterwalls.titleColor}
            title={data.contentfulProjectDetailsSetterwalls.titleOne}
            subtitle={data.contentfulProjectDetailsSetterwalls.subtitleOne}
            description={data.contentfulProjectDetailsSetterwalls.descriptionOne.childMarkdownRemark.rawMarkdownBody}
            subtitle2={data.contentfulProjectDetailsSetterwalls.subtitleTwo}
            description2={data.contentfulProjectDetailsSetterwalls.descriptionTwo.childMarkdownRemark.rawMarkdownBody}
            credits={data.contentfulProjectDetailsSetterwalls.creditsOne.childMarkdownRemark.rawMarkdownBody}
          />
          <Img className="case-image" fluid={data.contentfulProjectDetailsSetterwalls.imageOne.fluid} alt="setterwalls" />
        </div>
      </DescriptionContainer>
      <ToTopNavbar />
    </Layout>
  )

}
export default ProjectDetailsSetterwalls