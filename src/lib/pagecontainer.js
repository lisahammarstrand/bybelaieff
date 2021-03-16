import styled from 'styled-components'

export const PageContainer = styled.div`
position: relative;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
margin: 0 auto;
`

// Do I need this container? Why flex-grow: 1?
export const PageContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`