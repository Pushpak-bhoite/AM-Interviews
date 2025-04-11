import React from 'react';

 function Child({ data, onClick }) {
  console.log("👶 Child rendered");
  return (
    <div>
      <p>Child Component: {data.name}</p>
      <button onClick={onClick}>Child Button</button>
    </div>
  );
}
export default React.memo(Child)