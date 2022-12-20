import "./index.css";
import React, { useState } from "react";

function Studying() {
  const [color, setColor] = useState("black");
  const [cname, setCname] = useState("ver.ORIGINAL");

  const CnameRed = () => setCname("ver.RED");
  const CnameGreen = () => setCname("ver.GREEN");
  const CnameBlue = () => setCname("ver.BLUE");

  return (
    <div>
      <h1 style={{ color }} id="product-headline">
        판매되는 상품들
      </h1>
      <span style={{ color }}>{cname}</span>
      <br />
      <button
        style={{ color: "red" }}
        onClick={() => {
          setColor("red");
          CnameRed();
        }}
      >
        Red
      </button>
      <button
        style={{ color: "green" }}
        onClick={() => {
          setColor("green");
          CnameGreen();
        }}
      >
        Green
      </button>
      <button
        style={{ color: "blue" }}
        onClick={() => {
          setColor("blue");
          CnameBlue();
        }}
      >
        Blue
      </button>
    </div>
  );
}

export default Studying;
