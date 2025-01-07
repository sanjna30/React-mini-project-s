import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [pos, setPos] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const move = (e) => {
      const step = 10;
      if (e.key === "ArrowUp") setPos((p) => ({ ...p, y: p.y - step }));
      if (e.key === "ArrowDown") setPos((p) => ({ ...p, y: p.y + step }));
      if (e.key === "ArrowLeft") setPos((p) => ({ ...p, x: p.x - step }));
      if (e.key === "ArrowRight") setPos((p) => ({ ...p, x: p.x + step }));
    };

    window.addEventListener("keydown", move);
    return () => window.removeEventListener("keydown", move);
  }, []);

  return (
    <div className="app">
      <div
        className="box"
        style={{ top: pos.y, left: pos.x }}
      >
        Move Me
      </div>
    </div>
  );
};

export default App;
