import React, { useState } from "react";
import Inc from "./Increment";
import Dec from "./Decrement";

function Parent() {
  let [incvalue, setIncvalue] = useState(0);
  let [decvalue, setDecvalue] = useState(0);

  let increment = () => {
    setIncvalue(incvalue + 1 );
  };
  let decrement = () => {
    setDecvalue(decvalue - 1);
  };

  return (
    <div>
      <Inc dataInc={incvalue} func={increment}></Inc>
      <Dec dataDec={decvalue} func={decrement}></Dec>
    </div>
  );
}

export default Parent;
