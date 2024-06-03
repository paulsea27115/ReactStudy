import { useState, useRef, useReducer, useCallback } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Editor from "./components/Editor";
// import Exam from "./components/Exam";

const mockData = [
  {
    id: 2,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "공부하기",
    date: new Date().getTime(),
  },
  {
    id: 0,
    isDone: false,
    content: "책 읽기",
    date: new Date().getTime(),
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) =>
        item.id !== action.targetId ? true : false
      );
    default:
      return state;
  }
};

function App() {
  const [todos, dispatcher] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatcher({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  },[]);

  const onUpdate = useCallback((targetId) => {
    dispatcher({
      type: "UPDATE",
      targetId: targetId,
    });
  },[]);

  const onDelete = useCallback((targetId) => {
    dispatcher({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  // 기능 구현 먼저 -> 최적화 진행

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      {/* <Exam /> */}
    </div>
  );
}

export default App;
