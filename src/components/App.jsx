import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [click, setClick] = useState(false);

  function handleSubmit() {
    setClick(name);
    console.log("clicked");
  }
  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div className="container">
      <h1>Hello {click}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
