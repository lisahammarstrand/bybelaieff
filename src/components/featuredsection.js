import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import FeaturedProjectCard from './featuredprojectcard'


const FeaturedSectionContainer = styled.section`
  width: 100%;
  height: 450px;
  background: lightgray;
  color: white;
  display: flex;
  flex-wrap: wrap;

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`
const FeaturedSection = () => {
  return (
    <FeaturedSectionContainer>
      <Link to="/projectdetails">
        <FeaturedProjectCard
          background="#1F363D"
          title="Featured Project 1"
          description="Description 1"
        />
      </Link>
      <Link to="/">
        <FeaturedProjectCard
          background="#40798C"
          title="Featured Project 2"
          description="Description 2"
        />
      </Link>
    </FeaturedSectionContainer>
  )
}
export default FeaturedSection