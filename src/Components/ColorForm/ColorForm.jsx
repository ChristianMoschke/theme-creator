import { useState } from "react";
import { nanoid } from "nanoid";
import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({
  onSubmitColor,
  initialData = {
    role: "some color",
    hex: "#123456",
    contrastText: "#ffffff",
  },
}) {
  const [role, setRole] = useState(initialData.role);
  const [hex, setHex] = useState(initialData.hex);
  const [contrastText, setContrastText] = useState(initialData.contrastText);

  function handleSubmit() {
    onSubmitColor({
      id: nanoid(),
      role: role,
      hex: hex,
      contrastText: contrastText,
    });
  }

  return (
    <div className="color-form">
      <label htmlFor="role">
        Role
        <br />
        <input
          type="text"
          id="role"
          name="role"
          value={role}
          onChange={(event) => setRole(event.target.value)}
        />
      </label>
      <br />
      <label htmlFor="hex">
        Hex
        <br />
        <ColorInput
          id="hex"
          defaultValue={hex}
          onChange={(value) => setHex(value)}
        />
      </label>
      <br />
      <label htmlFor="contrastText">
        Contrast Text
        <br />
        <ColorInput
          id="contrastText"
          defaultValue={contrastText}
          onChange={(value) => setContrastText(value)}
        />
      </label>
      <br />
      <button onClick={handleSubmit}>ADD COLOR</button>
    </div>
  );
}
