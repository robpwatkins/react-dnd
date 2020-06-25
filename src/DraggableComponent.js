import React, { useRef, useState, useEffect } from 'react'

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
  const [cardInfo, setCardInfo] = useState(null);
  const ref = useRef()

  useEffect(() => {

  })

  // Monitor changes to position state and update DOM
  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
    }
  }, [position])

  const handleMouseDown = event => {
    setPressed(true);
    setCardInfo(event.target.innerText);
  }

  const handleDrag = event => {
    event.preventDefault();
    event.stopPropagation();
  }

  // Update the current position if mouse is down
  const onMouseMove = (event) => {
    if (pressed) {
      setPosition({
        x: position.x + event.movementX,
        y: position.y + event.movementY
      })
    }
  }
  // console.log(cardInfo);
  return (
    <div style={ containerStyle }>
      <div
        draggable
        onDrag={handleDrag}
        ref={ ref }
        style={ quickAndDirtyStyle }
        onMouseDown={ handleMouseDown }
        onMouseMove={ onMouseMove }
        onMouseUp={ () => setPressed(false) }>
        <p>Drag me!</p>
      </div>
      <div
        style={ quickAndDirtyStyle2 }
        onDragEnter={() => console.log('heyoo')}>
      </div>
    </div>
  )
}

export default DraggableComponent