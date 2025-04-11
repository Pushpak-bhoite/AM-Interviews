import React, { useCallback, useState } from 'react';
import Child from './child';

export default function Parent() {
  const [count, setCount] = useState(0);

  const data = { name: "React" };
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <div>
      <h1>Parent Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child data={data} onClick={handleClick} />
    </div>
  );
}
