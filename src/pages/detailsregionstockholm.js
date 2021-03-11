import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsTopSection from '../components/projectdetailstop'
import DetailsNavbar from '../components/navbarprojectdetails'
import DetailsDescription from '../components/projectdetailsdescription'


const DescriptionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `

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
          <DetailsDescription
            color={data.contentfulProjectDetailsRegionStockholm.titleColor}
            title={data.contentfulProjectDetailsRegionStockholm.titleOne}
            title2={data.contentfulProjectDetailsRegionStockholm.subtitleOne}
            description={data.contentfulProjectDetailsRegionStockholm.descriptionOne.childMarkdownRemark.rawMarkdownBody}
            credits={data.contentfulProjectDetailsRegionStockholm.creditsOne.childMarkdownRemark.rawMarkdownBody}
          />
          <Img className="case-image" fluid={data.contentfulProjectDetailsRegionStockholm.imageOne.fluid} alt="region_stockholm" />
        </div>
      </DescriptionContainer>
    </Layout>
  )

}
export default ProjectDetailsRegionStockholm