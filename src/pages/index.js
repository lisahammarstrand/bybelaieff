import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HeroSection from "../components/hero"
import FeaturedSection from '../components/featuredsection'
import ProjectSection from '../components/projectsection'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <FeaturedSection />
    <ProjectSection />
  </Layout>
)

export default IndexPage
