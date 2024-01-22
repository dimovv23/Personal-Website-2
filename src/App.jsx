import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <About />
    </>
  );
}

export default App;
