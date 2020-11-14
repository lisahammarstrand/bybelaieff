import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsToppSection from '../components/projectdetailstopp'
import DetailsImageSection from '../components/projectdetailsimage'
import DetailsDescription from '../components/projectdetailsdescription'



const ProjectDetails = () => {
  return (
    <Layout>
      <SEO title="Project Details" />
      <DetailsToppSection
        background="#1F363D"
        title="GS1"
        description="An inspiring project with a lot of challenge and opportunities" />
      <DetailsImageSection
        background="../src/images/gs1.png" />
      <DetailsDescription
        color="#1F363D"
        title="New design, guidelines, icons and more"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum mi et tristique mattis. Curabitur sagittis imperdiet bibendum. Nulla tincidunt in nisi sit amet faucibus. Vivamus sed sem sapien. Nulla malesuada hendrerit lacus, condimentum rutrum lacus egestas in." />

    </Layout>
  )
}

export default ProjectDetails