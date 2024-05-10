import { useState } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0);

  const changeCount = (value) => {
    setCount(count + value);
  };

  // State Lifting
  return (
    <div className="App">
      <h1>simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller changeCount={changeCount} /> 
      </section>
    </div>
  );
}

export default App;
