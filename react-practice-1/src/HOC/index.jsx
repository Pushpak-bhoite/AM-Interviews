  // A pure React component returns the same output for the same input props and doesn't 
// cause side effects during rendering. While you can use hooks like useState or useEffect in function components,
//  the term 'pure component' typically refers to stateless, side-effect-free components used for rendering only.

import React from 'react';
import MyComponent from './MyComponent';
import withGreeting from './withGreeting';

const EnhancedComponent = withGreeting(MyComponent);

function App() {
  return (
    <div>
      <EnhancedComponent name="John" age={24} />
    </div>
  );
}

export default App;
