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
`
const FeaturedSection = () => {
  return (
    <FeaturedSectionContainer>
      <FeaturedProjectCard
        background="#17525F"
        title="Featured Project 1"
        description="Description 1"
      />
      <FeaturedProjectCard
        background="#2E90A6"
        title="Featured Project 2"
        description="Description 2"
      />
    </FeaturedSectionContainer>
  )
}
export default FeaturedSection