import { useState } from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm.jsx";

function App() {
  const [colors, setColors] = useState(initialColors);

  function addColor(newColor) {
    setColors([newColor, ...colors]);
  }

  function deleteColor(id) {
    setColors(colors.filter((color) => color.id !== id));
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={addColor} />

      {colors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            onDeleteColor={deleteColor}
          />
        );
      })}
    </>
  );
}

export default App;
