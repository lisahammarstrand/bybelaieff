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
      <Link to="/detailsgs1">
        <FeaturedProjectCard
          background="#1F363D"
          title="GS1"
          description="Retail bar code scanning"
        />
      </Link>
      <Link to="/detailsiloveme">
        <FeaturedProjectCard
          background="#40798C"
          title="I love me"
          description="Gardasil"
        />
      </Link>
    </FeaturedSectionContainer>
  )
}
export default FeaturedSection