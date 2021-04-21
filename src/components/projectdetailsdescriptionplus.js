import React from 'react'
import styled from 'styled-components'

// Component used for project details descriptions: Bakgrund, Uppdrag, Lösning, Resultat, Credits
// Region Stockholm
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

  @media screen and (max-width: 768px) {
    padding: 20px 30px 10px 30px;
  }
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
  font-size: 14px;
`

const DetailsDescriptionPlus = ({ color, title, subtitle, subtitle2, subtitle3, subtitle4, description, description2, description3, description4, credits }) => {
  return (
    <DetailsDescriptionContainer>
      <DetailsDescriptionCopy>
        <DetailsDescriptionTitle color={color}>
          {title}
        </DetailsDescriptionTitle>
        <p> <span style={{ fontWeight: `bold`, color: color }}>{subtitle}</span> {description}</p>
        <p> <span style={{ fontWeight: `bold`, color: color }}>{subtitle2}</span> {description2}</p>
        <p> <span style={{ fontWeight: `bold`, color: color }}>{subtitle3}</span> {description3}</p>
        <p> <span style={{ fontWeight: `bold`, color: color }}>{subtitle4}</span> {description4}</p>
        <DetailsDescriptionCredits>
          <p>{credits}</p>
        </DetailsDescriptionCredits>
      </DetailsDescriptionCopy>
    </DetailsDescriptionContainer>
  )
}

export default DetailsDescriptionPlus