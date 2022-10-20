import { useState } from "react"
import DragMove from "./DragMove"

const Draggable = (props) => {
  const { children } = props

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
      >
        {children}
      </div>
    </DragMove>
  )
}

export default Draggable
