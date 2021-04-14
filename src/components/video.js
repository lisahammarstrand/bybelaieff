import React from 'react'
import styled from 'styled-components'

const VideoContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  `
const VideoPlayer = styled.iframe`
  width: 720px;
  height: 405px;
  `

const Video = ({ videoSrcURL, videoTitle, ...props }) => {
  return (
    <VideoContainer>
      <VideoPlayer
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen>
      </VideoPlayer>
    </VideoContainer>
  )
}

export default Video