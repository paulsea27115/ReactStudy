import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";
import PropTypes from "prop-types";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") return todos;

    return todos.filter((todo) => {
      return todo.content.toLowerCase().includes(search.toLowerCase());
    });
  };

  const filteredTodos = getFilteredData();

  // const getAnalyzedData = ()=>{
  //   console.log("getAnalyzedData호출")
  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((todo)=>todo.isDone).length;
  //   const noDoneCount = totalCount - doneCount;

  //   return {
  //     totalCount,
  //     doneCount,
  //     noDoneCount,
  //   };
  // }

  const { totalCount, doneCount, noDoneCount } = useMemo(() => {
    console.log("getAnalyzedData호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const noDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      noDoneCount,
    };
  }, [todos]);
  // 

  return (
    <div className="List">
      <h4>오늘의 일정 🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력해주세요"
      />
      <div className="todosInfo">
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>noDone: {noDoneCount}</div>
      </div>
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

List.propTypes = {
  todos: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default List;
