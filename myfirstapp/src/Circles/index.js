import { useState } from "react";

export default function CircleApp() {
  const [circles, setCircles] = useState([]);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    const radius = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
    console.log(radius)
    const newCircle = { x: e.clientX, y: e.clientY, radius };
    console.log(newCircle)

    let newCircles = [...circles, newCircle];
    if (newCircles.length > 2) {
      newCircles = [];
    }
    setCircles(newCircles);
    checkIntersection(newCircles);
  };

  const checkIntersection = (circles) => {
    if (circles.length < 2) {
      setBgColor("white");
      return;
    }
    const [c1, c2] = circles;
    const distance = Math.sqrt((c2.x - c1.x) ** 2 + (c2.y - c1.y) ** 2);
    if (distance < c1.radius + c2.radius) {
      setBgColor("red");
    } else {
      setBgColor("white");
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: bgColor,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            width: circle.radius * 2,
            height: circle.radius * 2,
            borderRadius: "50%",
            backgroundColor: "blue",
            position: "absolute",
            left: circle.x - circle.radius,
            top: circle.y - circle.radius,
          }}
        ></div>
      ))}
    </div>
  );
}
