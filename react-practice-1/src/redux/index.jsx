import React from 'react'
import IncreaseCount from './increase-count'
import store from './store'
import { Provider } from 'react-redux'

const App = () => {
    return (
        <Provider store={store}>
            <IncreaseCount />
        </Provider>
    )
}

export default App
