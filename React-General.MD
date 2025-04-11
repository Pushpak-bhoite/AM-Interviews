Feature	             CRA (create-react-app)	            Vite
Dev Bundler         	Webpack	                    Vite's Dev Server
Build Bundler	        Webpack                 	Rollup
JSX Transpiler	        Babel	                    ESBuild (dev) + Rollup (prod)
Build Command	        npm run build	            npm run build
Speed	                Slower (larger apps)	    Much faster (even for large apps)



Testing Types:

Unit Testing
→ Testing individual functions or components in isolation.
E.g., test a function that adds two numbers.

Integration Testing
→ Testing how multiple units work together.
E.g., test a form component and how it interacts with state and API.

End-to-End (E2E) Testing
→ Testing the entire application flow, simulating real user behavior.
E.g., open the app, log in, add a product to cart, place order.

Functional Testing
→ Similar to E2E, but focused on specific features or functionalities.


-------------- Cypress -------------
With testing what mostly we can achieve is E2E testing :

----------- JSX helps prevent certain types of cyber attacks -----------------
JSX helps prevent XSS((Cross-Site Scripting)) attacks by escaping HTML content by default. However, if we use dangerouslySetInnerHTML without sanitizing input, we risk opening up to cyber threats


------------ Memory leak Causes - --------
setTimeOUt
async Operations -not canceling promises  

--------------- Strict mode -------------

"StrictMode is a development tool in React that helps identify side effects, deprecated APIs, and potential issues by double-invoking certain lifecycle methods and hooks. It improves code quality and future-proofs our app, but doesn’t affect production performance."

-------------------About versioning in react ----------------------
Yes, our insurance project actually has three frontend microservices. The main customer portal is built in React 19, the internal underwriter dashboard is in React 18, and we also have a document management portal built separately. Each of these is deployed independently, and they communicate through shared APIs and sometimes even via module federation. 

1. super Admin & Admin panel portal
2. Agent and Customers 
3. Event 
4. Esign

reat 18 vs 19
1. Concurrent Rendering establishde in 19 - You're typing in a search box while a big component is rendering
 -Concurrent rendering allows React to interrupt a render, prioritize urgent updates like input typing, and resume rendering later. It keeps the UI responsive under heavy load.

2. Manual use of memo, useMemo	Smarter memoization under the hood
3. new hooks - useActionState