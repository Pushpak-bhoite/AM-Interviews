import React, { useState } from 'react';

export default function App() {
  const [cnt, setCnt] = useState(0);
  const [intevalVal, setIntervalVal] = useState(null);
  function startWatch() {
    if (intevalVal) return;
    const data = setInterval(() => {
      setCnt((prev) => prev + 1);
    }, 1000);
    setIntervalVal(data);
  }

  function stopWatch() {
    clearTimeout(intevalVal)
    setIntervalVal(null);
  }
  function reset(){
    setCnt(0)
  }
  return (
    <div>
      <button onClick={startWatch}> start</button>
      {cnt}
      <button onClick={stopWatch}> stop</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
