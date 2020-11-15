import React from 'react'
import styled from 'styled-components'
import DetailsImageSection from './projectdetailsimage'

const DetailsDescriptionContainer = styled.section`
  width: 100%;
  height: auto;
  padding: 40px;
  margin: 50px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
`
const DetailsDescriptionCopy = styled.article`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const DetailsDescription = ({ color, title, description }) => {
  return (
    <DetailsDescriptionContainer color={color}>
      <DetailsDescriptionCopy>
        <h2>{title}</h2>
        <p>{description}</p>
      </DetailsDescriptionCopy>
    </DetailsDescriptionContainer>
  )
}

export default DetailsDescription