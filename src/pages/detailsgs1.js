import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DetailsToppSection from '../components/projectdetailstopp'
import DetailsImageSection from '../components/projectdetailsimage'
import Image from '../components/image'
import DetailsDescription from '../components/projectdetailsdescription'
import { ShowCaseContainer } from '../lib/showcasecontainer'

const ProjectDetailsGS1 = () => {
  const data = useStaticQuery(
    graphql`
    {
    contentfulFeaturedProjectDetailsGs1 {
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
        background="#1F363D"
        title={data.contentfulFeaturedProjectDetailsGs1.title}
        description={data.contentfulFeaturedProjectDetailsGs1.shortDescription}
      />
      <ShowCaseContainer>
        <DetailsImageSection>
          <Image />
        </DetailsImageSection>
        <DetailsDescription
          color="#1F363D"
          title={data.contentfulFeaturedProjectDetailsGs1.secondTitle}
          description={data.contentfulFeaturedProjectDetailsGs1.secondDescription.childMarkdownRemark.rawMarkdownBody} />
      </ShowCaseContainer>
    </Layout>
  )

}
export default ProjectDetailsGS1