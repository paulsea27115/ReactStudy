// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState, useRef } from "react";
import "../css/Register.css";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();
    console.log("Register 렌더링");

  const onChange = (e) => {
    countRef.current++;
    // console.log(countRef.current)
    // console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onClick = (e)=>{
    console.log(e.currentTarget);
    e.currentTarget.value = "안녕"
    console.log(inputRef);
  }

  const onSubmit = () => {
    if (input.name === "") {
      // console.log(inputRef.current)
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          onClick={onClick}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>
      <div>
        <select
          name="country"
          value={input.country}
          onChange={onChange}
          id="country"
        >
          <option value=""></option>
          <option value="Kr">한국</option>
          <option value="USA">미국</option>
          <option value="UK">영국</option>
        </select>
        {input.country}
      </div>
      <div>
        <textarea
          name="bio"
          onChange={onChange}
          id=""
          cols="30"
          rows="10"
        ></textarea>
        {input.bio}
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};
export default Register;
