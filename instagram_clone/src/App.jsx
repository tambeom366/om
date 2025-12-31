import React from "react";

function App() {
  const username = "OmTambe";

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>📸 Instagram Clone JSX Test</h1>
      <p>Hello, {username}!</p>
      <button
        onClick={() => alert(`Welcome to Instagram clone, ${username}!`)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
