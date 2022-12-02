import "./App.css";
import { useState } from "react";

type TPoint = {
  x: number;
  y: number;
};

function App() {
  const [points, setPoint] = useState<TPoint[]>([]);
  const [popped, setPopped] = useState<TPoint[]>([]);


  function handlePlaceCircle(e: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY } = e;
    setPoint([
      ...points,
      {
        x: clientX,
        y: clientY,
      },
    ]);
  }

  function handleUndo() {
    const newPoints = [...points];
    const poppedPoint = newPoints.pop();
    if (!poppedPoint) return;
    setPopped([...popped, poppedPoint]);
    setPoint(newPoints);
  }

  function handleRedo() {
    const newPopped = [...popped];
    const poppedPoint = newPopped.pop();
    if (!poppedPoint) return;
    setPoint([...points, poppedPoint]);
    setPopped(newPopped);
  }

  return (
    <div>
      <button disabled={points.length === 0} onClick={handleUndo}>Undo</button>
      <button disabled={popped.length === 0} onClick={handleRedo}>Redo</button>
      <div className="App" onClick={handlePlaceCircle}>
        {points.map((point, idx) => (
          <div
            key={idx}
            className="point"
            style={{
              left: point.x - 5 + "px",
              top: point.y - 5 + "px",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
