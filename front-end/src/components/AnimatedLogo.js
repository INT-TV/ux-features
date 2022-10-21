import { useEffect, useState } from "react"

const AnimatedLogo = () => {
  const [border, setBorder] = useState(0)
  
  useEffect(() => {
    updateNum()
  }, [])

  const updateNum = () => {
    setBorder(border => (border + 1) % 400)
    setTimeout(() => {
      updateNum()
    }, 10);
  }

  const containerStyle = {
    position: "relative",
    backgroundColor: "black",
    width: "50em",
    height: "50em",
  }

  const logoStyle = {
    position: "absolute",
    fontWeight: "800",
    fontSize: "250px",
    color: "#D0D0D0",
    left: "15px",
    top: "20px",
  }

  const borderBoxStyle = {
    position: 'absolute',
    width: '50em',
    height: '50em',
    border: `${border}px dashed #FFF`,
    boxSizing: 'border-box',
    overflow: 'hidden'
  }

  return (
    <>
      <h1>click to begin animation</h1>
      <div style={containerStyle} onClick={updateNum}>
        <span style={borderBoxStyle} />
        <h1 style={logoStyle}>INT.TV</h1>
      </div>
    </>
  )
}

export default AnimatedLogo
