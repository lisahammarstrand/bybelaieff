import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsTopSection from '../components/projectdetailstop'
import DetailsNavbar from '../components/navbarprojectdetails'
import DetailsImageSection from '../components/projectdetailsimage'
import Image from '../components/image'
import DetailsDescription from '../components/projectdetailsdescription'


const ProjectDetailsTradgardsMassan = () => {
  return (

    <Layout>
      <SEO title="Project Details" />
      <DetailsTopSection
        background="#71a9ad"
        title="Trädgårdsmässan"
        description="The Gardening Fair" />
      <DetailsNavbar />
      <DetailsImageSection>
        <Image />
      </DetailsImageSection>
      <DetailsDescription
        color="#71a9ad"
        title="TRÄDGÅRDSMÄSSAN 2014"
        title2="Tema Urban fägring."
        description="Ingen plats är omöjlig att odla på. Tillbaka till naturen, fast inne i stan. Men även det omvända. 
        Det urbana flyttar in i våra trädgårdar i form av modern arkitektur, betong och gråskalor. Urban fägring helt enkelt. 
        Temat följs upp i affischer, annonser, webb och idéträdgårdar på mässan."
        credits="Uppdragsgivare: Stockholmsmässan via Kasselring & Co. Projektledare: Johan Skylling. 
        Produktionsledare: Eva Kasselring. AD: Nina Belaieff. Illustratör: Lina Eklund."
      />
    </Layout>
  )

}
export default ProjectDetailsTradgardsMassan