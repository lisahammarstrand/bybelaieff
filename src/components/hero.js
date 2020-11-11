import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'


import BackgroundSlider from 'gatsby-image-background-slider'

const HeroBackground = () => (
  <>
    <BackgroundSlider
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile (filter: {sourceInstanceName: {eq: "backgrounds"}}){
            nodes {
              relativePath
              childImageSharp {
                fluid (maxWidth: 4000, quality: 100){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
      initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
      transition={4} // transition duration between images
      duration={8} // how long an image is shown
      // specify images to include (and their order) according to `relativePath`
      images={["mock_hero_blue.png", "mock_hero_green.png", "mock_hero_yellow.png"]}

      // pass down standard element props
      style={{
        width: `100%`,
        height: `100vh`,
        display: `flex`,
        alignItems: `center`,
      }}
    >
      {/* Captions in sync with background images*/}
      <div style={{
        width: `100%`,
        height: `100vh`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,

      }}><h1 style={{
        marginLeft: `62px`,
        fontSize: `102px`,
        letterSpacing: `2px`,
        alignSelf: `flex-start`,
      }}>By Belaieff</h1>
        <div style={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          /* alignSelf: `center`, */
        }}>
          <h2 style={{
            letterSpacing: `1px`,
          }}>urval av projekt</h2>
          <span style={{
            fontSize: `32px`,
          }}>▽</span>
        </div>
      </div>
      {/* <div >GREEN</div>
      <div >YELLOW</div> */}
    </BackgroundSlider>
  </>
)

const HeroSection = styled(HeroBackground)`
  width: 100%;
  height: auto;
  
`
export default HeroSection