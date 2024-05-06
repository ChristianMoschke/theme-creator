import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm.jsx";
import { uid } from "uid";
import "./App.css";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    if (newColor.id === undefined) {
      setColors([{ id: uid(), ...newColor }, ...colors]);
    } else {
      setColors([newColor, ...colors]);
    }
  }

  function handleDeleteColor(id) {
    setColors(colors.filter((color) => color.id !== id));
  }

  function handleEditColor(colorEdit) {
    setColors(
      colors.map((color) => {
        if (color.id === colorEdit.id) return colorEdit;
        return color;
      })
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />
      <br />
      {colors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            id={color.id}
            onDeleteColor={handleDeleteColor}
            onEditColor={handleEditColor}
          />
        );
      })}
    </>
  );
}

export default App;
