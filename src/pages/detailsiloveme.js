import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsToppSection from '../components/projectdetailstopp'
import DetailsImageSection from '../components/projectdetailsimage'
import Image from '../components/image'
import DetailsDescription from '../components/projectdetailsdescription'


const ProjectDetailsIloveMe = () => {
  const data = useStaticQuery(
    graphql`
    {
    contentfulFeaturedProjectDetailsILoveMe {
      title
      shortDescription
      secondTitle
      secondDescription {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
    }
  }
    `
  )
  return (

    <Layout>
      <SEO title="Project Details" />
      <DetailsToppSection
        background="#40798C"
        title={data.contentfulFeaturedProjectDetailsILoveMe.title}
        description={data.contentfulFeaturedProjectDetailsILoveMe.shortDescription} />
      <DetailsImageSection>
        <Image />
      </DetailsImageSection>
      <DetailsDescription
        color="#40798C"
        title={data.contentfulFeaturedProjectDetailsILoveMe.secondTitle}
        description={data.contentfulFeaturedProjectDetailsILoveMe.secondDescription.childMarkdownRemark.rawMarkdownBody} />
    </Layout>
  )

}
export default ProjectDetailsIloveMe