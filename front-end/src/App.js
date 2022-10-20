import React from "react"
import DraggableContainer from "./components/DraggableContainer"
import YoutubeFrame from "./components/YoutubeFrame"
import { exampleVideos } from "./example/videos"
import AnimatedLogo from "./components/AnimatedLogo"

function App() {
  return (
    <div className="App">
      <h1>INT.TV UX Designs</h1>
      <div className="testing-container">
        <DraggableContainer>
          <YoutubeFrame src={"#"} />
        </DraggableContainer>

        <DraggableContainer>
          <YoutubeFrame src={"#"} />
        </DraggableContainer>

        <DraggableContainer>
          <YoutubeFrame src={"#"} />
        </DraggableContainer>
      </div>

      <br /><br />
      <AnimatedLogo />
    </div>
  )
}

export default App
