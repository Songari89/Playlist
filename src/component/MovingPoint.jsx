import React, { useState, useEffect } from "react";

const MovingPoint = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });

    // 이전 상태를 이용한 조건부 로직. 객체를 바로 리턴할 때는 소괄호()로 감싸기
    setPosition((prev) => ({ ...prev, y: clientY }));
  };

  /* 
	1. 최초 컴포넌트 렌더링 시 window 객체에 이벤트 핸들러 등록
	이후 mousemove 이벤트 발생 시 등록된 핸들러 작동
*/
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  /*
	2. React에서 제공하는 이벤트 prop을 이용
	컴포넌트 간의 인터페이스로서 명확한 의사소통, 코드 가독성 및 유지보수성을 높일 수 있다.
*/
  return (
    <div
      className="container"
      onMouseMove={handleMouseMove}
      style={{
        width: "500px",
        height: "500px",
        backgroundColor: "beige",
        margin: "0",
        padding: "0",
        position: "relative"
      }}
    >
      <div
        className="point"
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "red",
          position:"absolute",
          left: position.x, top: position.y }}
        // style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
    </div>
  );
};

export default MovingPoint;
