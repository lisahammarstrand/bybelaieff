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
max-width: 650px;
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
      }
    }
    `
  )

  return (
    <Layout>
      <SEO title="Om" />
      <AboutContainer>
        <AboutDescription>
          <h1 style={{ fontSize: `2.25rem`, fontWeight: `400` }}>{data.contentfulOm.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.contentfulOm.description.childMarkdownRemark.html, }}></div>
        </AboutDescription>
      </AboutContainer>
    </Layout>
  )
}


export default AboutPage

