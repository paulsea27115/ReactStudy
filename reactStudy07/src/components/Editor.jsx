import "./Editor.css";
import PropTypes from "prop-types";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

const Editor = ( ) => {
  const { onCreate } = useContext(TodoDispatchContext);
  // console.log(data)

  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e)=>{
    if(e.key==="Enter"){
      e.preventDefault();
      onSubmit();
    }
  }

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="오늘은 무엇을 했나요?"
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

// Editor.propTypes = {
//   onCreate: PropTypes.func.isRequired, // onCreate prop에 대한 유형을 함수로 지정하고 필수임을 명시합니다.
// };

export default Editor;
