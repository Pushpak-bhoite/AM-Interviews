
import { configureStore ,applyMiddleware} from "@reduxjs/toolkit";
// import postsReducer from './reducer'
import { composeWithDevTools } from "redux-devtools-extension";
import  thunkMiddleware  from "redux-thunk";
const composedEnhancer =composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore({
        reducer: rootReducer,
        composedEnhancer
    }
);

export default store;