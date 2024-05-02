import React from "react";

function Increment(props) {
  console.log("Increment", props);

  return (
    <div>
      <h1>{props.dataInc}</h1>
      <button onClick={props.func}>Click me to increment</button>
    </div>
  );
}

export default React.memo(
  Increment,
  (prevProps, nextProps) => prevProps.dataInc === nextProps.dataInc
);
