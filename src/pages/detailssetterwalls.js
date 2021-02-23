import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsTopSection from '../components/projectdetailstop'
import DetailsNavbar from '../components/navbarprojectdetails'
import DetailsImageSection from '../components/projectdetailsimage'
import Image from '../components/image'
import DetailsDescription from '../components/projectdetailsdescription'


const ProjectDetailsSetterwalls = () => {
  return (

    <Layout>
      <SEO title="Project Details" />
      <DetailsTopSection
        background="#2a5155"
        title="Setterwalls"
        description="Attorneys at law" />
      <DetailsNavbar />
      <DetailsImageSection>
        <Image />
      </DetailsImageSection>
      <DetailsDescription
        color="#2a5155"
        title="Paragraphs and paragraphs"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum mi et tristique mattis. Curabitur sagittis imperdiet bibendum. Nulla tincidunt in nisi sit amet faucibus. Vivamus sed sem sapien. Nulla malesuada hendrerit lacus, condimentum rutrum lacus egestas in." />

    </Layout>
  )

}
export default ProjectDetailsSetterwalls