import React from 'react'
import styled from 'styled-components'




const DetailsDescriptionContainer = styled.section`
  width: 100%;
  height: auto;
  padding: 40px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  background-image: linear-gradient(to right, lightgray , white);
`
const DetailsDescriptionCopy = styled.article`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
`
const DetailsDescriptionTitle = styled.h2`
  color: ${(props) => props.color};
  margin-bottom: 0;
  align-self: flex-start;
`
const DetailsDescriptionCredits = styled.div`
  display: flex;
  font-size: 16px;
`
const DetailsDescription = ({ color, title, title2, description, credits }) => {
  return (
    <DetailsDescriptionContainer>
      <DetailsDescriptionCopy>
        <DetailsDescriptionTitle color={color}>
          {title}
        </DetailsDescriptionTitle>
        <p> <span style={{ fontWeight: `bold`, color: color }}>{title2}</span> {description}</p>
        <DetailsDescriptionCredits>
          <p>{credits}</p>
        </DetailsDescriptionCredits>
      </DetailsDescriptionCopy>
    </DetailsDescriptionContainer>
  )
}

export default DetailsDescription