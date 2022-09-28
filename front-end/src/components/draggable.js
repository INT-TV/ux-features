import { useState } from "react"
import DragMove from "./DragMove"

const Draggable = (props) => {
  const { mouseX, mouseY } = props

  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  })

  const handleDragMove = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY,
    })
  }

  return (
    <DragMove onDragMove={handleDragMove}>
      <div
        className="draggable-container"
        style={{
          transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
        }}
        onDragMove={handleDragMove}
      >
        {mouseX} {mouseY}
      </div>
    </DragMove>
  )
}

export default Draggable
