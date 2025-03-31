//re-render only once
// https://playcode.io/react - try this editor

import React from 'react';

import { useState } from "react";

export function Test1(props) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  console.log("Component re-rendered");

  const handleClick = () => {
    setCount((c) => c + 1);
    setText("Updated");

    // Before React 18, this would cause TWO re-renders.
  };
  console.log("text", text);
  console.log("cnt", count);
  return (
    <div className='App'>
      <button onClick={handleClick}>Click me -> {text} {count}</button>
    </div>
  );
}



