/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"

import Header from "./header"
import Footer from './footer'
import { PageContainer, PageContent } from '../lib/pagecontainer'


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <PageContainer>
        <PageContent>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <main>
            {children}
          </main>
        </PageContent>
        <Footer />
      </PageContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
