import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsToppSection from '../components/projectdetailstopp'
import DetailsImageSection from '../components/projectdetailsimage'
import Image from '../components/image'
import DetailsDescription from '../components/projectdetailsdescription'


const ProjectDetailsIloveMe = () => {
  return (

    <Layout>
      <SEO title="Project Details" />
      <DetailsToppSection
        background="#40798C"
        title="GS1"
        description="Important project to prevent ovary cancer" />
      <DetailsImageSection>
        <Image />
      </DetailsImageSection>
      <DetailsDescription
        color="#40798C"
        title="A challenging but rewarding project to work with"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum mi et tristique mattis. Curabitur sagittis imperdiet bibendum. Nulla tincidunt in nisi sit amet faucibus. Vivamus sed sem sapien. Nulla malesuada hendrerit lacus, condimentum rutrum lacus egestas in." />

    </Layout>
  )

}
export default ProjectDetailsIloveMe