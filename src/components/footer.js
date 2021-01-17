import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background: #1F363D;
  color: white;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  padding: 1rem;
`
const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Navigation = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0px;

  a {
    text-decoration: none;
    color: white;
    margin-right: 16px;

    &:hover {
      color: #6FD3E9;
    }
  }
`
const Author = styled.p`
  margin: 0px;  
  font-size: .9rem;
`
const NavItem = styled.li`
  margin-bottom: 0px;  
  font-size: .9rem;
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
      <Author>© {new Date().getFullYear()}, {data.site.siteMetadata.author}
      </Author>
      <NavContainer>
        <Navigation>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>
          <NavItem>
            <Link to="contact">Contact</Link>
          </NavItem>
          <NavItem>
            <Link to="https://www.linkedin.com/">Linkedin</Link>
          </NavItem>
        </Navigation>
      </NavContainer>
    </StyledFooter>
  )
}
export default Footer