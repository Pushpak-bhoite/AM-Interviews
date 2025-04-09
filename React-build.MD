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