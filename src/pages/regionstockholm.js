import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsTopSection from '../components/projectdetailstop'
import DetailsNavbar from '../components/navbarprojectdetails'
import DetailsDescriptionPlus from '../components/projectdetailsdescriptionplus'
import { DescriptionContainer } from '../components/detailsdescriptioncontainer'
import ToTopNavbar from '../components/totopnavbar'

const ProjectsRegionStockholm = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulRegionStockholm {
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
      subtitleTwo
      descriptionTwo {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      subtitleThree
      descriptionThree {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      subtitleFour
      descriptionFour {
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
      <SEO title="Region Stockholm" />
      <DetailsTopSection
        background={data.contentfulRegionStockholm.background}
        title={data.contentfulRegionStockholm.titleTop}
      />
      <DetailsNavbar
        linkleft="/utbildningsmaterial"
        linkright="/kapi"
      />
      <DescriptionContainer>
        <div className="case-container">
          <DetailsDescriptionPlus
            color={data.contentfulRegionStockholm.titleColor}
            title={data.contentfulRegionStockholm.titleOne}
            subtitle={data.contentfulRegionStockholm.subtitleOne}
            description={data.contentfulRegionStockholm.descriptionOne.childMarkdownRemark.rawMarkdownBody}
            subtitle2={data.contentfulRegionStockholm.subtitleTwo}
            description2={data.contentfulRegionStockholm.descriptionTwo.childMarkdownRemark.rawMarkdownBody}
            subtitle3={data.contentfulRegionStockholm.subtitleThree}
            description3={data.contentfulRegionStockholm.descriptionThree.childMarkdownRemark.rawMarkdownBody}
            subtitle4={data.contentfulRegionStockholm.subtitleFour}
            description4={data.contentfulRegionStockholm.descriptionFour.childMarkdownRemark.rawMarkdownBody}
            credits={data.contentfulRegionStockholm.creditsOne.childMarkdownRemark.rawMarkdownBody}
          />
          <Img className="case-image" fluid={data.contentfulRegionStockholm.imageOne.fluid} alt="region_stockholm" />
        </div>
      </DescriptionContainer>
      <ToTopNavbar linktotop="/regionstockholm#top" title="Region Stockholm" />
    </Layout>
  )

}
export default ProjectsRegionStockholm