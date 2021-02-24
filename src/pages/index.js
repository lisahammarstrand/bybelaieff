import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/hero"
import ProjectSection from '../components/projectsection'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <ProjectSection />
  </Layout>
)

export default IndexPage
