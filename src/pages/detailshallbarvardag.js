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
  /* background-image: linear-gradient(to right, #d9d9d9 , white); */
  `

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
      imageOne {
        fixed(quality: 100, width: 225) {
          ...GatsbyContentfulFixed
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
        <DetailsDescription
          color={data.contentfulProjectDetailsHallbarVardag.titleColor}
          title={data.contentfulProjectDetailsHallbarVardag.titleOne}
          title2={data.contentfulProjectDetailsHallbarVardag.subtitleOne}
          description={data.contentfulProjectDetailsHallbarVardag.descriptionOne.childMarkdownRemark.rawMarkdownBody}
          credits={data.contentfulProjectDetailsHallbarVardag.creditsOne.childMarkdownRemark.rawMarkdownBody}
        />
        <Img fixed={data.contentfulProjectDetailsHallbarVardag.imageOne.fixed} alt="hållbar_vardag" />
      </DescriptionContainer>
    </Layout>
  )

}
export default ProjectDetailsHallbarVardag