// Button 컴포넌트 생성
// <Button> ... 엘리먼트를 반환하는 컴포넌트

import React from "react";

// 속성 :
// 글자색 :color ("white", "black")
// 배경색 :backgroundColor ("red", "green","blue")
// 글자버튼 :text(대문자로 표시)

// variant : 버튼 스타일 타입

interface ButtonProp {
  // color: "white" | "black";
  // backgroundColor : "red" | "green" | blue
  variant: "primary" | "secondary" | "warning";
  text: string;
}

const Button: React.FC<ButtonProp> = ({ variant, text }) => {
  let bgColor = "blue";
  let color = "black";

  switch (variant) {
    case "primary":
      bgColor = "red";
      color = "white";
      break;
    case "secondary":
      bgColor = "green";
      color = "white";
      break;
    case "warning":
      bgColor = "orange";
      color = "white";
      break;
  }

  return (
    <button
      style={{
        color: color,
        backgroundColor: bgColor,
      }}
    >
      {text.toUpperCase()}
    </button >
  );
};

export default Button;