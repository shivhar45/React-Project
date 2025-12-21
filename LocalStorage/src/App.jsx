import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"; // lowercase
  });

  useEffect(() => {
    const body = document.body;
    body.classList.remove("light", "dark");
    body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <h1>Toggling the current theme = {theme}</h1>
      <button onClick={() => setTheme("dark")}>Change to dark</button>
      <br />
      <button onClick={() => setTheme("light")}>Change to light</button>
    </>
  );
}

export default App;