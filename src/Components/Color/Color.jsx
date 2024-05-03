import "./Color.css";
import { useState } from "react";

export default function Color({ onDeleteColor, color }) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  function onDelete() {
    setShowDeleteConfirmation(true);
  }

  function onCancelDelete() {
    setShowDeleteConfirmation(false);
  }

  function onConfirmDelete(id) {
    onDeleteColor(id);
    setShowDeleteConfirmation(false);
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>

      <div>
        {showDeleteConfirmation ? (
          <p className="color-card-highlight">
            Confirm delete?
            <button onClick={() => onCancelDelete()}>Cancel</button>
            <button onClick={() => onConfirmDelete(color.id)}>Confirm</button>
          </p>
        ) : (
          <button onClick={() => onDelete()}>Delete</button>
        )}
      </div>
    </div>
  );
}
