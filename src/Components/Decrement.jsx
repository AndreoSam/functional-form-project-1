import React from "react";

function Decrement(props) {
  console.log("Decrement", props);

  return (
    <div>
      <h1>{props.dataDec}</h1>
      <button onClick={props.func}>Click me to decrement</button>
    </div>
  );
}

export default React.memo(
  Decrement,
  (prevProps, nextProps) => prevProps.dataDec === nextProps.dataDec
);
