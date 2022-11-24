import './App.css'
import { useState } from 'react';

type TPoint = {
  x: number;
  y: number;
}


function App() {
  const [points, setPoint] = useState<TPoint[]>([]);

  function handlePlaceCircle(e: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY } = e;
    setPoint([...points, {
      x: clientX,
      y: clientY,
    }])
  }

  
  return (
    <div className="App" onClick={handlePlaceCircle}>
      {points.map((point) => (
        <div className="point" style={{
          left: point.x - 5 + "px",
          top: point.y - 5 + "px",
        }}
        >
          o
        </div>
      ))}
    </div>
  )
}

export default App
