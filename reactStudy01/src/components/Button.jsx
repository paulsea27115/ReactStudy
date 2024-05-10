// Cross Browing lssue
// -> 브라우저 별 이벤트 이름 등 스펙이 달라 발생하는 문제


const Button = ({text, color, a, children}) =>{
    // 이벤트 객체
    const onClickButton = (e) => {
        console.log(e) // 위 문제를 위해 생긴 합성 이벤트(리액트 이벤트)라는 객체
        console.log(text)
    }

    return (
        <button 
            onClick={onClickButton}
            // onMouseEnter={onClickButton} 
            style={{color : color}}
        >
            {text} - {color.toUpperCase()}
            {children}
            <br />
            {a}
        </button>
    )
}

Button.defaultProps = {
    color:"black",
    a:0,
}

export default Button
