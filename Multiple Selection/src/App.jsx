import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelection = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="app">
      <h1>Multiple Selection</h1>
      <div className="items">
        {["1", "2", "3", "4"].map((id) => (
          <div
            key={id}
            className={`item ${selectedItems.includes(id) ? "selected" : ""}`}
            onClick={() => toggleSelection(id)}
          >
            Item {id}
          </div>
        ))}
      </div>
      <h3>{selectedItems.join(", ")}</h3>
    </div>
  );
};

export default App;
