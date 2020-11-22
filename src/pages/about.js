import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center; 
  background: #17525F;
  color: #1F363D;
  padding: 40px;
  margin: 0px;
  transform: translate(0px,-100px);
`

const AboutDescription = styled.article`
  position: absolute;
  top: 150px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  text-align: center;
  color: white;
  margin: 50px;

  a {
    text-decoration: none;
    color: white;
  }
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <AboutContainer>
      <AboutDescription>
        <h1>Hi from the about page</h1>
        <p>Welcome to about me</p>
      </AboutDescription>
    </AboutContainer>
  </Layout>
)

export default AboutPage
