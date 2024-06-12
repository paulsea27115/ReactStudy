import {
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
  useMemo
} from "react";
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

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
// console.log(TodoContext);

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
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatcher({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatcher({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  const memoizedDispatched = useMemo(()=>{
    return {onCreate, onDelete, onUpdate};
  }, [onCreate, onDelete, onUpdate]); // 그냥 value에 넣으면 리랜더링 될때마다 다시 실행됨
  // 기능 구현 먼저 -> 최적화 진행

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatched}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
