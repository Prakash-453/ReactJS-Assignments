// import React, { useState } from "react";

// function FunLifeCycle() {

//   const [text, setText] = useState("Hiiii");

//   const handleButton = () => {
//     setText("Helooooo");
//   };

//   return (
//     <div>
//       <h1>{text}</h1>
//       <button onClick={handleButton}>Click Me</button>
//     </div>
//   );
// }

// export default FunLifeCycle;



// Counter : 1,2,3,.....

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
