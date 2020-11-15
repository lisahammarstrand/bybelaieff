import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsToppSection from '../components/projectdetailstopp'
import DetailsImageSection from '../components/projectdetailsimage'
import Image from '../components/image'
import DetailsDescription from '../components/projectdetailsdescription'


const ProjectDetailsStockholmsEuKontor = () => {
  return (

    <Layout>
      <SEO title="Project Details" />
      <DetailsToppSection
        background="#17525F"
        title={<>Stockholms <br />EU-kontor</>}
        description="Stockholm in the European Union" />
      <DetailsImageSection>
        <Image />
      </DetailsImageSection>
      <DetailsDescription
        color="#17525F"
        title="Brussels calling"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum mi et tristique mattis. Curabitur sagittis imperdiet bibendum. Nulla tincidunt in nisi sit amet faucibus. Vivamus sed sem sapien. Nulla malesuada hendrerit lacus, condimentum rutrum lacus egestas in." />

    </Layout>
  )

}
export default ProjectDetailsStockholmsEuKontor