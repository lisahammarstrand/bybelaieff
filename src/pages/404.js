import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageNotFound = styled.div`
  width: 100vw;
  height: 100vh;
  background: #17525F;
  padding: 100px;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <PageNotFound>
      <h1>404: Not found</h1>
      <p>Den här sidan finns inte. Gå tillbaka och försök igen!</p>
    </PageNotFound>
  </Layout>
)

export default NotFoundPage
