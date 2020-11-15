import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 40px;
  margin: 50px 0px;
`

const AboutDescription = styled.article`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #1F363D";

`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <AboutContainer>
      <AboutDescription>
        <h1>Hi from the about page</h1>
        <p>Welcome to about me</p>
        <Link to="/">Go back to the homepage</Link>
      </AboutDescription>
    </AboutContainer>
  </Layout>
)

export default AboutPage
