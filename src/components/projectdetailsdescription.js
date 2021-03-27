import React from 'react'
import styled from 'styled-components'

// Component used for project details descriptions: Bakgrund and Uppdrag
const DetailsDescriptionContainer = styled.section`
  width: 100%;
  height: auto;
  padding: 20px 20px 10px 20px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
`
const DetailsDescriptionCopy = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
`
const DetailsDescriptionTitle = styled.h2`
  color: ${(props) => props.color};
  margin-bottom: 0.4rem;
  align-self: flex-start;
`
const DetailsDescriptionCredits = styled.div`
  display: flex;
  font-size: 16px;
`

const DetailsDescription = ({ color, title, subtitle, subtitle2, description, description2, credits }) => {
  return (
    <DetailsDescriptionContainer>
      <DetailsDescriptionCopy>
        <DetailsDescriptionTitle color={color}>
          {title}
        </DetailsDescriptionTitle>
        <p> <span style={{ fontWeight: `bold`, color: color }}>{subtitle}</span> {description}</p>
        <p> <span style={{ fontWeight: `bold`, color: color }}>{subtitle2}</span> {description2}</p>
        <DetailsDescriptionCredits>
          <p>{credits}</p>
        </DetailsDescriptionCredits>
      </DetailsDescriptionCopy>
    </DetailsDescriptionContainer>
  )
}

export default DetailsDescription