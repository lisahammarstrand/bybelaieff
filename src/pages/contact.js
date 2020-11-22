import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center; 
  background: #40798C;
  padding: 40px;
  margin: 0px;
  transform: translate(0px,-100px);
`

const ContactDescription = styled.article`
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

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <ContactContainer>
      <ContactDescription>
        <h1>Hi from the contact page</h1>
        <p>Welcome to contact me at</p>
      </ContactDescription>
    </ContactContainer>
  </Layout>
)

export default ContactPage
