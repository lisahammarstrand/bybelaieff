import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  margin: 0 auto;
  background: #1F363D;
  color: white;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  padding: 1rem;
`
const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <StyledFooter>
      <p>© {new Date().getFullYear()}, {data.site.siteMetadata.author}
      </p>
    </StyledFooter>
  )
}
export default Footer