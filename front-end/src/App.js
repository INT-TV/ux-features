import React from "react"
import DraggableContainer from "./components/DraggableContainer"
import YoutubeFrame from "./components/YoutubeFrame"
import { exampleVideos } from "./example/videos"

function App() {
  return (
    <div className="App">
      <h1>INT.TV UX Designs</h1>
      <div className="testing-container">
        <DraggableContainer>
          <YoutubeFrame src={exampleVideos.test} />
        </DraggableContainer>

        <DraggableContainer>
          <YoutubeFrame src={exampleVideos.tiktoks} />
        </DraggableContainer>

        <DraggableContainer>
          <YoutubeFrame src={exampleVideos.music} />
        </DraggableContainer>
      </div>
    </div>
  )
}

export default App
