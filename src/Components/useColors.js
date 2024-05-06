import { useState } from "react";
import { initialColors } from "../lib/colors";

export function useColors() {
  const [colors, setColors] = useState(initialColors);

  function addColor(newColor) {
    setColors([newColor, ...colors]);
  }

  function deleteColor(id) {
    setColors(colors.filter((color) => color.id !== id));
  }

  return { colors, addColor, deleteColor, setColors };
}
