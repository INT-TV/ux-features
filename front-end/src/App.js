import React from 'react'
import Draggable from './components/draggable'

function App() {
  const mousePosition = useMousePosition();

  return (
    <div className="App">
      <h1>INT.TV UX Designs</h1>
      <div className="testing-container">
        <Draggable mouseX={mousePosition.x} mouseY={mousePosition.y}/>
      </div>
    </div>
  )
}

const useMousePosition = () => {
  const [
    mousePosition,
    setMousePosition
  ] = React.useState({ x: null, y: null });

  React.useEffect(() => {
    const updateMousePosition = ev => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default App
