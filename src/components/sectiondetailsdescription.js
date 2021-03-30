import React from 'react'
import styled from 'styled-components'

// Component used in sections with only Title and Credits, f ex Utbildningsmaterial
const DetailsDescriptionCopy = styled.article`
  width: 100%;
  height: auto;
  padding: 20px 50px 0px 50px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  color: #000;
`
const DetailsDescriptionTitle = styled.h3`
  color: ${(props) => props.color};
  margin-bottom: 0;
  text-align: left;
`
const DetailsDescriptionCredits = styled.div`
  display: flex;
  font-size: 14px;
  text-align: left;
`

const SectionDescription = ({ color, title, credits }) => {
  return (
    <DetailsDescriptionCopy>
      <DetailsDescriptionTitle color={color}>
        {title}
      </DetailsDescriptionTitle>
      <DetailsDescriptionCredits>
        <p>{credits}</p>
      </DetailsDescriptionCredits>
    </DetailsDescriptionCopy>
  )
}
export default SectionDescription