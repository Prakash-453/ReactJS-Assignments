import React, { useState } from "react";
import "./circles.css";

const Circle = () => {
  const [circles, setCircles] = useState([]);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const generateRandomRadius = () => Math.floor(Math.random() * 181) + 20;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  const handleClick = (e) => {
    const { clientX, clientY } = e;
    const radius = generateRandomRadius();
    const newCircle = { x: clientX, y: clientY, radius };

    const updatedCircles = [...circles, newCircle];
    if (updatedCircles.length > 2) {
      setCircles([]);
      setIsIntersecting(false);
    } else {
      setCircles(updatedCircles);
      checkIntersection(updatedCircles);
    }
  };

  const checkIntersection = (circles) => {
    if (circles.length < 2) {
      setIsIntersecting(false);
      return;
    }
    const [circle1, circle2] = circles;
    const dx = circle1.x - circle2.x;
    const dy = circle1.y - circle2.y;
    const distance = Math.sqrt(dx ** 2 + dy ** 2);
    setIsIntersecting(distance < circle1.radius + circle2.radius);
  };

  return (
    <div
      className="viewport"
      onClick={handleClick}
      style={{ backgroundColor: isIntersecting ? "yellowgreen" : "red" }}
    >
      {circles.map((circle, index) => (
        <div
          className="circle"
          key={index}
          style={{
            width: circle.radius * 2,
            height: circle.radius * 2,
            left: circle.x - circle.radius,
            top: circle.y - circle.radius,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Circle;