```React :
SAP- single page application
MVC-used to build reusable components for view layer.
Virtual DOM - creates virtual DOM for fast updation and minimizes DOM manipulation.
SSR - react can be used for server-side-rendering.
Virtual DOM - is an in-memory representation of the actual DOM
,react uses to optimise process updation and rerendering.
Diffing Alg - compares current and previous version of V-DOM.
declarative approach - it lets you focus on what the UI should look like, instead manuallyupdating DOM(imperative approach).
Transpiler(babel) - using this browser reads JSX 

Props(properties):

HOC(Higher Order component): 
- method of reusing pure component and returns enhanced component.

One Way Data Binding:
- data has one way flow, child component can't update data. 

Pure Component:
- is a type of React component that only re-renders if the props or state it receives change.

Life Cycle Methods Of Component:
- Initialization, Mounting, Updating, Unmounting.

 Hooks:
- a new addition in React 16.8. They let developers use state and other React features without writing a class.

Fragment: when we are trying to render more than one root element we use this or div

Custom Hook: to reuse stateful logic across components



---------------



React :
SAP- single page application
MVC-used to build reusable components for view layer.
Virtual DOM - creates virtual DOM for fast updation and minimizes DOM manipulation.
SSR - react can be used for server-side-rendering.
Virtual DOM - is an in-memory representation of the actual DOM
,react uses to optimise process updation and rerendering.
Diffing Alg - compares current and previous version of V-DOM.
declarative approach - it lets you focus on what the UI should look like, instead manuallyupdating DOM(imperative approach).
Transpiler(babel) - using this browser reads JSX 
Props(properties):
HOC(Higher Order component): 
- method of reusing pure component and returns enhanced component.
One Way Data Binding:
- data has one way flow, child component can't update data. 
Pure Component:
- is a type of React component that only re-renders if the props or state it receives change.
Life Cycle Methods Of Component:
- Initialization, Mounting, Updating, Unmounting.
 Hooks:
- a new addition in React 16.8. They let developers use state and other React features without writing a class.
Fragment: when we are trying to render more than one root element we use this or div
Custom Hook: to reuse stateful logic across components



------------------



HTML:

inline- <span>, <a>, <strong>, <em>, <img>, <button>
inline-block - <button>, <input>, <img>, <label>
block - <div>, <p>,<h>, <section>, <artical>, <form>, <prep>

CSS - Inline css, Internal css, External css.

Semantic tags: Header, Main Section Article Aside Footer etc.

DOCTYPE (document type declaration ) - tells the browser in which version of the HTML the document is written.



-------------------



Lazy loading:
- Only loads those components which are need to load. 
-Next JS has this built in optimization.
webpack - used to bundle(following imported files & merge) the react app in minified format.
work - import components using lazy() method
Suspense - is a wrapper for lazy components, fallback is important <suspense fallback={<div>loading</div>}>


------------



Batching:
-optimization technique, improves performance
-multiple state updates in an event handler are grouped into a single render
-Introduced in react 18.
-Ex: const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
Before Fiber (React 17) - Each setCount triggers a re-render separately:
Count: 1
Count: 2
Count: 3
- After Fiber (React 18) - React batches updates and re-renders once:
Count: 1

----------------------------

Fiber:
- is React's reconciliation(process) algorithm, introduced in React 16.
Incremental Rendering: - rendering happens in small chunks(unlike react before 16, without fiber it was synchronous).
Asynchronous Rendering: - rendering can pause, resume, and even abort updates based on priority.
Interruptible Rendering - You have a component that renders a large image.
   While React is rendering the image, the user types into an input field.
   Without Fiber, React would wait for the image to finish rendering before handling the input (bad UX).
   With Fiber, React interrupts the image rendering, processes the input first, and then resumes the image rendering.

Priority	Example
High =	User clicks, typing, animations
Medium = Network requests, fetching data
Low	= Background tasks, non-visible UI updates
🔹 Example: Interruptible Rendering in Action

---------------------------
UseState: 
- click count increment button
-  Fiber node's "Effect Tag" is marked as "Update" in V-DOM.
- React Schedules Reconciliation(re-render)
-  React does not immediately traverse the Fiber tree. Instead, it waits until the event handler completes, then batches updates before scheduling a reconciliation
✅ Step 1: Click event → React queues updates.
✅ Step 2: React marks the Fiber node for updates.
✅ Step 3: React batches state updates (if inside an event).
✅ Step 4: React starts reconciliation.
✅ Step 5: React processes the queue and determines the final state.
✅ Step 6: React commits changes to the DOM.
✅ Step 7: React clears the queue.

functional state update -
setCount(prev => prev + 1)
direct state update -
setCount(count + 1)

 Memoized Value-
When useState is used, React stores the state value inside the Fiber Node.
On re-renders, React retrieves the stored state instead of re-initializing it.

-------------------------

Fiber:
- is React's internal engine
Reconciliation:
- is the process React uses to compare the previous and new Virtual DOM trees and determine what needs to change in the actual DOM.
Diffing Algorithm:
- is the core part of the reconciliation process that determines what parts of the Virtual DOM have changed.

--------------


Need of Keys in React:
-They help React efficiently identify which items changed, were added, or removed.
-When React renders a list, it compares the new list with the previous one to update only the changed items.
-If keys are missing, React relies on index-based reconciliation( so that's the reason avoid using index as key, it can break UI consistency when items are reordered or deleted.), which can lead to performance issues and UI inconsistencies.
-Without Keys:
   React removes all items and re-renders everything.
   Causes visual glitches like input field losing focus.


   -------------------


   useEffect:
useEffect combines all three
componentDidMount (Runs when the component mounts)
componentDidUpdate (Runs when the component updates)
componentWillUnmount (Runs when the component unmounts)

- But since react 16 hooks came in picture, these functions dont runs internally even.
- without dependancy array useEffect function gonna run each time which is eventually(ComponentDidMount).
 


 -------------------
 
 
 
 React Phases:
1.render phase - creation of v-DOM and useEffects registering (useEffects dont get executed imidiately, they gets registered in an internal queue for later execution) & useState initializations ( user see Blank page still in this phase ).

Commit Phase == DOM-updation is same:
the moment when-
  The JSX elements declared in your component become real HTML elements in the browser.
  The screen is painted, meaning the user now sees the UI.
  But effects (useEffect) are still waiting to execute.

React's rendering must be pure (i.e., without side effects like API calls, timeouts, or DOM manipulations). Running useEffect during render would break this purity. Instead, React collects effects and schedules them for execution AFTER the DOM is updated.


-----------


Fiber Node Representation:

function MyComponent() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="container">
      <h1>Hello</h1>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </div>
  );
}
Fiber Tree (js object)-
{
  "type": "MyComponent",
  "state": { "count": 0 },
  "props": {},
  "child": {
    "type": "div",
    "props": { "className": "container" },
    "child": {
      "type": "h1",
      "props": {},
      "text": "Hello",
      "sibling": {
        "type": "button",
        "props": { "onClick": "setCount(count + 1)" },
        "text": "Click 0"
      }
    }
  }
}
----------------------------------

* React's Virtual DOM only stores metadata (JS object references), not the actual content. Otherwise copying heavy images/videos is hard.Ex:
{
  "type": "img",
  "props": {
    "src": "image.jpg",
    "alt": "Example"
  },
  "effectTag": "NoChange"
}
When React re-creates the Fiber tree during re-renders, it compares references to the src property.

-------------------

Interruptible Rendering :
 1.Render Phase( includes rendering-which is creation fiber tree and reconciliation ): Are Interruptible 
React starts rendering, but it can pause if needed.
 Commit Phase:
- Not interruptible and synchronous, The updated count appears on the screen.
- useEffects runs after the commit phase.
 If a high-priority task happens (like a button click during rendering)
React pauses rendering, handles the event, and resumes later.


----------

Fiber Tree Structure (First Render) with useStates and useEffects:
Root Fiber (React Root)
  ├── Fiber(App)  ---> Stores App's `useEffect`
  │     ├── Fiber(DIV)  
  │     │     ├── Fiber(H1)  ("Hello React.")
  │     │     ├── Fiber(MyComp)  ---> Stores MyComp's `useState` & `useEffect`
  │     │           ├── Fiber(DIV)  
  │     │           │     ├── Fiber(H1)  ("mycomp")
  │     │           │     ├── Fiber(BUTTON)  (Click)
  │     │           │     ├── Fiber(H3)  (count value)

Hooks (useState, useEffect) are stored inside their respective Fiber Nodes(myComp / App).
The states are stored as a circular linked list inside the Fiber Node.
The effects are also stored in an effect queue in the Fiber Node.

(First Render) - Fiber Tree & Hook Storage 
Fiber(App)
  ├── hooks → [ { effect: parent useEffect, deps: [] } ]
  ├── Fiber(MyComp)
        ├── hooks → [
              { state: 0, queue: [] },
              { effect: child useEffect, deps: [count] }
          ]

-The hooks fields are also linked to each other in the Circular Linked-List Format.
* Fiber reconciliation algorithm has programmed render phase from parent to child but commit phase childs to parent so that the reason useEffect's callback runs first and then parent's.