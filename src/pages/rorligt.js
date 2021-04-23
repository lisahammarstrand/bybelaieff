import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsTopSection from '../components/projectdetailstop'
import DetailsNavbar from '../components/navbarprojectdetails'
import DetailsDescription from '../components/projectdetailsdescription'
import { DescriptionContainer } from '../components/detailsdescriptioncontainer'
import ToTopNavbar from '../components/totopnavbar'
import Video from '../components/video'

const ProjectsMotion = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulRorligt {
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
      videoSourceOne
      videoTitleOne
      videoSourceTwo
      videoTitleTwo
    }
  }
  `)
  return (

    <Layout>
      <SEO title="Rörligt" />
      <DetailsTopSection
        background={data.contentfulRorligt.background}
        title={data.contentfulRorligt.titleTop}
      />
      <DetailsNavbar
        linkleft="/vardguiden1177"
        linkright="/setterwalls"
      />
      <DescriptionContainer>
        <div className="case-container">
          <DetailsDescription
            color={data.contentfulRorligt.titleColor}
            title={data.contentfulRorligt.titleOne}
            subtitle={data.contentfulRorligt.subtitleOne}
            description={data.contentfulRorligt.descriptionOne.childMarkdownRemark.rawMarkdownBody}
            credits={data.contentfulRorligt.creditsOne.childMarkdownRemark.rawMarkdownBody}
          />
          <Video
            videoSrcURL={data.contentfulRorligt.videoSourceOne}
            videoTitle={data.contentfulRorligt.videoTitleOne} />
          <Video
            videoSrcURL={data.contentfulRorligt.videoSourceTwo}
            videoTitle={data.contentfulRorligt.videoTitleTwo} />
        </div>
      </DescriptionContainer>
      <ToTopNavbar linktotop="/rorligt#top" title="Rörligt" />
    </Layout>
  )

}
export default ProjectsMotion