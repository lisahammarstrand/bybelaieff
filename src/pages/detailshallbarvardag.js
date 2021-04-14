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
import Video from '../components/video'

const ProjectDetailsHallbarVardag = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulProjectDetailsHallbarVardag {
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
    }
  }
  `)
  return (

    <Layout>
      <SEO title="Project Details" />
      <DetailsTopSection
        background={data.contentfulProjectDetailsHallbarVardag.background}
        title={data.contentfulProjectDetailsHallbarVardag.titleTop}
      />
      <DetailsNavbar
        linkleft="/detailsvardguiden"
        linkright="/detailssetterwalls"
      />
      <DescriptionContainer>
        <div className="case-container">
          <DetailsDescription
            color={data.contentfulProjectDetailsHallbarVardag.titleColor}
            title={data.contentfulProjectDetailsHallbarVardag.titleOne}
            subtitle={data.contentfulProjectDetailsHallbarVardag.subtitleOne}
            description={data.contentfulProjectDetailsHallbarVardag.descriptionOne.childMarkdownRemark.rawMarkdownBody}
            credits={data.contentfulProjectDetailsHallbarVardag.creditsOne.childMarkdownRemark.rawMarkdownBody}
          />
          <Video
            videoSrcURL="https://www.youtube.com/embed/sSiJ35xjtVg"
            videoTitle="YouTube video player" />
          <Video
            videoSrcURL="https://www.youtube.com/embed/sSiJ35xjtVg"
            videoTitle="YouTube video player" />
        </div>
      </DescriptionContainer>
      <ToTopNavbar linktotop="/detailshallbarvardag#top" title="Hållbar vardag" />
    </Layout>
  )

}
export default ProjectDetailsHallbarVardag