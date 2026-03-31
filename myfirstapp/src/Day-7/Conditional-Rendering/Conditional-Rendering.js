// import React from "react";

function ConditionalRendering() {
  const isLoggedIn = true;
  if (isLoggedIn) {
    return (
      <div>
        <h1>Login SuccesFul</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Login UnSuccessFul</h1>
      </div>
    );
  }
}

  // return isLoggedIn?<h1>Login SuccesFul</h1>:<h1>Login UnSuccessFul</h1>
  // }

  export default ConditionalRendering;

  // import React from "react";

  // function ConditionalRendering(props) {
  //   return props.isLoggedIn ? <h1>Login SuccesFul</h1> : <h1>Login UnSuccessFul</h1>;
  // }

  // export default ConditionalRendering;
