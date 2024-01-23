import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <About />
      <Projects />
    </>
  );
}

export default App;
