import { useEffect } from "react"

const Even = ()=>{

    useEffect(()=>{
        // 클린업, 정리함수
        console.log("짝수 실행")
        return ()=>{
            console.log("Unmount") // unmount 시 실행
        };
    }, []);

    return(
        <div>짝수입니다.</div>
    );
}
export default Even