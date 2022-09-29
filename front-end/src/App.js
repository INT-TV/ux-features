import React from "react"
import DraggableContainer from "./components/DraggableContainer"
import { exampleVideos } from './example/videos'

function App() {
  return (
    <div className="App">
      <h1>INT.TV UX Designs</h1>
      <div className="testing-container">
        <DraggableContainer>
          <iframe
            src={exampleVideos.test}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </DraggableContainer>
      </div>
    </div>
  )
}

export default App
