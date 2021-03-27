import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsTopSection from '../components/projectdetailstop'
import DetailsNavbar from '../components/navbarprojectdetails'
import DetailsDescriptionPlus from '../components/projectdetailsdescriptionplus'
import { DescriptionContainer } from '../components/detailsdescriptioncontainer'


const ProjectDetailsRegionStockholm = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulProjectDetailsRegionStockholm {
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
      <SEO title="Project Details" />
      <DetailsTopSection
        background={data.contentfulProjectDetailsRegionStockholm.background}
        title={data.contentfulProjectDetailsRegionStockholm.titleTop}
      />
      <DetailsNavbar
        linkleft="/detailsutbildningsmaterial"
        linkright="/detailskapi"
      />
      <DescriptionContainer>
        <div className="case-container">
          <DetailsDescriptionPlus
            color={data.contentfulProjectDetailsRegionStockholm.titleColor}
            title={data.contentfulProjectDetailsRegionStockholm.titleOne}
            subtitle={data.contentfulProjectDetailsRegionStockholm.subtitleOne}
            description={data.contentfulProjectDetailsRegionStockholm.descriptionOne.childMarkdownRemark.rawMarkdownBody}
            subtitle2={data.contentfulProjectDetailsRegionStockholm.subtitleTwo}
            description2={data.contentfulProjectDetailsRegionStockholm.descriptionTwo.childMarkdownRemark.rawMarkdownBody}
            subtitle3={data.contentfulProjectDetailsRegionStockholm.subtitleThree}
            description3={data.contentfulProjectDetailsRegionStockholm.descriptionThree.childMarkdownRemark.rawMarkdownBody}
            subtitle4={data.contentfulProjectDetailsRegionStockholm.subtitleFour}
            description4={data.contentfulProjectDetailsRegionStockholm.descriptionFour.childMarkdownRemark.rawMarkdownBody}
            credits={data.contentfulProjectDetailsRegionStockholm.creditsOne.childMarkdownRemark.rawMarkdownBody}
          />
          <Img className="case-image" fluid={data.contentfulProjectDetailsRegionStockholm.imageOne.fluid} alt="region_stockholm" />
        </div>
      </DescriptionContainer>
    </Layout>
  )

}
export default ProjectDetailsRegionStockholm