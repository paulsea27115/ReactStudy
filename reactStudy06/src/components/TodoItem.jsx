import "./TodoItem.css";
import { memo } from "react";
import PropTypes from 'prop-types'; 

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onClickDeleteBtn = () => {
    onDelete(id);
  };
  
  return (
    <div className="TodoItem">
      <input
        readOnly
        type="checkbox"
        checked={isDone}
        onChange={onChangeCheckBox}
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button className="deleteBtn" onClick={onClickDeleteBtn}>
        삭제
      </button>
    </div>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  isDone: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

// // 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps)=>{
//   if(prevProps.id !== nextProps.id) return false;
//   if(prevProps.isDone !== nextProps.isDone) return false;
//   if(prevProps.content !== nextProps.content) return false;
//   if(prevProps.date !== nextProps.date) return false;

//   return true;
// });
export default memo(TodoItem);