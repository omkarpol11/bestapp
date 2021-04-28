import React, { useState, useEffect } from "react";

export default function HookCounter() {
  const myname = useState("omkar ");
  const [counter, setcounter] = useState(0);
  const [counter1, setcounter1] = useState(0);
  const stateHandler = () => {
    myname[1]("pol");
  };
  const Increment = () => {
    setcounter(counter + 1);
  };
  const Decrement = () => {
      
    setcounter1(counter1 - 1);
  };
  const Incremented = () => {
    for (let i = 0; i < 10; i++) {
      setcounter((preCount) => preCount + 1);
    }
  };
  useEffect(() => {
    console.log("omkar");
  }, [counter, counter1]);
  return (
    <div>
      {myname}
      <br></br>
      <button onClick={stateHandler}>surname</button>
      <button onClick={Increment}>increment{counter}</button>
      <button onclick={Decrement}>decrement{counter1}</button>
      <button onclick={Incremented}>increment by 10 -{counter}</button>
    </div>
  );
}
