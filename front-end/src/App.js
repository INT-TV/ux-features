import React from "react"
import DraggableContainer from "./components/DraggableContainer"
import { exampleVideos } from './example/videos'

const iframeProps = {
  frameBorder: '0',
  allow: 'autoplay; encrypted-media',
  title: 'video'
}

function App() {
  return (
    <div className="App">
      <h1>INT.TV UX Designs</h1>
      <div className="testing-container">
        <DraggableContainer>
          <iframe
            src={exampleVideos.test}
            frameBorder={iframeProps.frameBorder}
            allow={iframeProps.allow}
            allowFullScreen
            title={iframeProps.title}
          />
        </DraggableContainer>
        <DraggableContainer>
          <iframe
            src={exampleVideos.tiktoks}
            frameBorder={iframeProps.frameBorder}
            allow={iframeProps.allow}
            allowFullScreen
            title={iframeProps.title}
          />
        </DraggableContainer>
        <DraggableContainer>
          <iframe
            src={exampleVideos.music}
            frameBorder={iframeProps.frameBorder}
            allow={iframeProps.allow}
            allowFullScreen
            title={iframeProps.title}
          />
        </DraggableContainer>
      </div>
    </div>
  )
}

export default App
