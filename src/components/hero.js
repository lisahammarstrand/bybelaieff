import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import BackgroundSlider from 'gatsby-image-background-slider'

const HeroContainer = styled.section`
  width: 100%;
  height: 580px; 
  color: white;
`
const ChevronDown = styled.h1`
  margin: 0px;
`
const scrolldown = keyframes`
0% {height: 30%;
    opacity: 0;
  }
50% {height: 15%;
    opacity: 1;
  }
100% {height: 0%;
      opacity: 0;   
  }
}
`
const ScrollDown = styled.div`
  position: absolute;
  left: 49%;
  height: 100px;
  bottom: 0px;
  display: flex;
  justifyContent: center;
  alignItems: center;
  alignSelf: center;
  animation: ${scrolldown} 4s linear infinite;
`
const HeroBackground = () => (
  <>
    <HeroContainer>
      <div style={{
        width: `100%`,
        height: `358px`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `flex-start`,
        paddingLeft: `32px`,
        position: `absolute`,
        top: `250px`,

      }}><h1 style={{
        borderBottom: `1px solid white`,
        marginBottom: `16px`,
        paddingBottom: `6px`,
      }}>Exempel på uppdrag</h1>
        <h2 style={{ fontWeight: `normal`, marginBottom: `12px` }}>Grafisk formgivning</h2>
        <h2 style={{ fontWeight: `normal`, marginBottom: `12px` }}>Art Direction</h2>
        <h2 style={{ fontWeight: `normal`, marginBottom: `12px` }}>Arkitektur</h2>
        <ScrollDown>
          <ChevronDown>
            <FontAwesomeIcon icon={faChevronDown} />
          </ChevronDown>
        </ScrollDown>
      </div>
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
        images={["hero_top_blue_2.jpg", "hero_top_green.jpg", "hero_top_yellow.jpg"]}

        // pass down standard element props
        style={{
          width: `100%`,
          height: `100vh`,
          display: `flex`,
          alignItems: `center`,
        }}
      >
      </BackgroundSlider>
    </HeroContainer>
  </>
)

const HeroSection = styled(HeroBackground)`
  width: 100%;
  height: auto;
  
`
export default HeroSection