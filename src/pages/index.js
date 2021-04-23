import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/hero"
import ProjectSection from '../components/projectsection'


const IndexPage = () => (
  <Layout>
    <SEO title="By Belaieff Design Art Direction Arkitektur" />
    <HeroSection />
    <ProjectSection />
  </Layout>
)

export default IndexPage
