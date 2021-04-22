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
      contentfulKontakt {
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
      <SEO title="Kontakt" />
      <ContactContainer>
        <ContactDescription>
          <h1 style={{ fontSize: `2.25rem`, fontWeight: `400` }}>{data.contentfulKontakt.title}</h1>
          <ContactDetailsContainer>
            <ContactDetails>{data.contentfulKontakt.email}</ContactDetails>
            <ContactDetails>{data.contentfulKontakt.phone}</ContactDetails>
            <Link to="https://www.linkedin.com/in/nina-belaieff-3903471a5/">
              <ContactDetails>{data.contentfulKontakt.linkedin}</ContactDetails>
            </Link>
          </ContactDetailsContainer>
        </ContactDescription>
      </ContactContainer>
    </Layout>
  )
}

export default ContactPage
