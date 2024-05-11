import { useState, useEffect, useRef } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트
  useEffect(() => {
    console.log("Mount");
  }, []);
  // 2. 업데이트
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("Updating");
  });
  // 3. 언마운트
  // Even.jsx 파일 확인

  // useEffect(()=>{ // (실행 함수, [변수]) 배열에 의존
  //   console.log(`count : ${count}, input : ${input}`)
  // },[count, input]) // count 값이 바뀔때마다 실행

  // 의존성 배열
  // dependency array
  // deps

  const changeCount = (value) => {
    setCount(count + value); // 비동기 처리됨
  };

  // State Lifting
  return (
    <div className="App">
      <h1>simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even/> : null}
      </section>
      <section>
        <Controller changeCount={changeCount} />
      </section>
    </div>
  );
}

export default App;
