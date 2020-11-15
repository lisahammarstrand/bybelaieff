import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsToppSection from '../components/projectdetailstopp'
import DetailsImageSection from '../components/projectdetailsimage'
import Image from '../components/image'
import DetailsDescription from '../components/projectdetailsdescription'


const ProjectDetailsYogaHemfrid = () => {
  return (

    <Layout>
      <SEO title="Project Details" />
      <DetailsToppSection
        background="#7D7E38"
        title="Yoga eller Hemfrid"
        description="Build strength or buy time" />
      <DetailsImageSection>
        <Image />
      </DetailsImageSection>
      <DetailsDescription
        color="#7D7E38"
        title="Keeping calm and strong here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum mi et tristique mattis. Curabitur sagittis imperdiet bibendum. Nulla tincidunt in nisi sit amet faucibus. Vivamus sed sem sapien. Nulla malesuada hendrerit lacus, condimentum rutrum lacus egestas in." />

    </Layout>
  )

}
export default ProjectDetailsYogaHemfrid