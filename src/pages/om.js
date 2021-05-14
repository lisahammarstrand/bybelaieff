import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"


const AboutContainer = styled.section`
position: relative;
width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center; 
background: #17525F;
padding: 40px;
margin: 0px;
`

const AboutDescription = styled.article`
max-width: 750px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start; 
text-align: left;
color: white;
padding: 50px;

a {
  text-decoration: none;
  color: white;
}

@media (max-width: 768px) {
  padding: 0px; 
}
`

const AboutPage = () => {
  const data = useStaticQuery(
    graphql`
    {
      contentfulOm {
        title
        description {
          childMarkdownRemark {
            html
          }
        }
        title2
        description2 {
          childMarkdownRemark {
            html
          }
        }
        subtitle2
        subdescription2 {
          childMarkdownRemark {
            html
          }
        }
        subtitle22
        subdescription22 {
          childMarkdownRemark {
            html
          }
        }
        title3
        description3 {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    `
  )

  return (
    <Layout>
      <SEO title="Om" />
      <AboutContainer>
        <AboutDescription>
          <h1 style={{ marginBottom: `0.4rem`, fontSize: `2.25rem`, fontWeight: `400` }}>{data.contentfulOm.title}</h1>
          <div style={{ marginBottom: `1.0rem` }} dangerouslySetInnerHTML={{ __html: data.contentfulOm.description.childMarkdownRemark.html, }}></div>
          <h2 style={{ marginBottom: `0.4rem` }}>{data.contentfulOm.title2}</h2>
          <div dangerouslySetInnerHTML={{ __html: data.contentfulOm.description2.childMarkdownRemark.html, }}></div>
          <h3 style={{ marginBottom: `0.4rem`, fontSize: `1.2rem`, fontWeight: `400` }}>{data.contentfulOm.subtitle2}</h3>
          <div dangerouslySetInnerHTML={{ __html: data.contentfulOm.subdescription2.childMarkdownRemark.html, }}></div>
          <h3 style={{ marginBottom: `0.4rem`, fontSize: `1.2rem`, fontWeight: `400` }}>{data.contentfulOm.subtitle22}</h3>
          <div style={{ marginBottom: `1.0rem` }} dangerouslySetInnerHTML={{ __html: data.contentfulOm.subdescription22.childMarkdownRemark.html, }}></div>
          <h2 style={{ marginBottom: `0.4rem`, fontSize: `1.5rem`, fontWeight: `600` }}>{data.contentfulOm.title3}</h2>
          <div style={{ marginBottom: `1.0rem` }} dangerouslySetInnerHTML={{ __html: data.contentfulOm.description3.childMarkdownRemark.html, }}></div>
        </AboutDescription>
      </AboutContainer>
    </Layout>
  )
}


export default AboutPage

