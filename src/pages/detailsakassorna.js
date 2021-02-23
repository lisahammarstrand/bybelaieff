import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsTopSection from '../components/projectdetailstop'
import DetailsNavbar from '../components/navbarprojectdetails'
import DetailsImageSection from '../components/projectdetailsimage'
import Image from '../components/image'
import DetailsDescription from '../components/projectdetailsdescription'


const ProjectDetailsAkassorna = () => {
  return (

    <Layout>
      <SEO title="Project Details" />
      <DetailsTopSection
        background="#4a7351"
        title="A-kassorna"
        description="A-kassorna" />
      <DetailsNavbar />
      <DetailsImageSection>
        <Image />
      </DetailsImageSection>
      <DetailsDescription
        color="#4a7351"
        title="A-kassorna A-kassorna A-kassorna"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum mi et tristique mattis. Curabitur sagittis imperdiet bibendum. Nulla tincidunt in nisi sit amet faucibus. Vivamus sed sem sapien. Nulla malesuada hendrerit lacus, condimentum rutrum lacus egestas in." />

    </Layout>
  )

}
export default ProjectDetailsAkassorna