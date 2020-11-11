import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Hi from the contact page</h1>
      <p>Contact me</p>
      <Link to="/">Go back to homepage</Link>
    </Layout>
  )
}

export default ContactPage