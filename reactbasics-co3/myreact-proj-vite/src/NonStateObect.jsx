import React from "react";

function Counter() {
  let count = 0;

  const NonStateObjet = () => {
    count++;
    console.log("Count is: ", count); // updates in console
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increase}>Increase</button>
    </div>
  );
}
export default NonStateObjet;