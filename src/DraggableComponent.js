import React, { useRef, useState, useEffect } from 'react'
import { findByLabelText } from '@testing-library/react'

const containerStyle = {
  display: "flex"
}

const quickAndDirtyStyle = {
  width: "200px",
  height: "200px",
  background: "#FF9900",
  color: "#FFFFFF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: '10px'
}

const quickAndDirtyStyle2 = {
  width: "200px",
  height: "200px",
  background: "hotpink",
  color: "#FFFFFF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const DraggableComponent = () => {
  const [pressed, setPressed] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})
  const ref = useRef()

  // Monitor changes to position state and update DOM
  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
    }
  }, [position])

  // Update the current position if mouse is down
  const onMouseMove = (event) => {
    if (pressed) {
      setPosition({
        x: position.x + event.movementX,
        y: position.y + event.movementY
      })
    }
  }

  return (
    <div style={ containerStyle }>
      <div
        ref={ ref }
        style={ quickAndDirtyStyle }
        onMouseMove={ onMouseMove }
        onMouseDown={ () => setPressed(true) }
        onMouseUp={ () => setPressed(false) }>
        <p>{ pressed ? "Dragging..." : "Press to drag" }</p>
      </div>
      <div
        style={ quickAndDirtyStyle2 }
      >
      </div>
    </div>
  )
}

export default DraggableComponent