import "./App.css";
import { useState } from "react";
import HookExam from "./components/HookExam";
// jsx 주의 사항
// 중괄호 내부에서는 자바스크립트 표현식만 쓸수 있다.
// 슷자, 문자열, 배열 값만 랜더링 한다 functin, null, defined => X
// 최상위 태그는 반드시 하나여야만 한다
// -> 만약 최상위 태그가 없다면 <> 빈괄호로

// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출 될 수 없다.
// 3. 나만의 훅(custom hook)  직접 만들 수 있다.

const App = () => {
  return (
    <>
      <HookExam />
    </>
  );
};

export default App;
