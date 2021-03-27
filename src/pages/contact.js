import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
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
`

const ContactDescription = styled.article`
  position: absolute;
  top: 50px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; 
  text-align: left;
  color: white;
  margin: 50px;

  a {
    text-decoration: none;
    color: white;
  }
`
const ContactDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; 
  text-align: left;
  margin-top: 32px;
`
const ContactDetails = styled.p`
  margin: 8px;
`

const ContactPage = () => {
  const data = useStaticQuery(
    graphql`
    query MyQuery {
      contentfulContact {
        title
        email
        phone
        linkedin
      }
    }    
    `
  )
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactContainer>
        <ContactDescription>
          <h1>{data.contentfulContact.title}</h1>
          <ContactDetailsContainer>
            <ContactDetails>{data.contentfulContact.email}</ContactDetails>
            <ContactDetails>{data.contentfulContact.phone}</ContactDetails>
            <Link to="https://www.linkedin.com/in/nina-belaieff-3903471a5/">
              <ContactDetails>{data.contentfulContact.linkedin}</ContactDetails>
            </Link>
          </ContactDetailsContainer>
        </ContactDescription>
      </ContactContainer>
    </Layout>
  )
}

export default ContactPage
