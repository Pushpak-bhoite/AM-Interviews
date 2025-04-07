import './App.css'
import { Test1 } from './react-batching/example1'
import { Test2 } from './react-batching/functional-vs-direct-state-update'
import ReusableTable from './reusable-table/App'
import ReusableTable2 from './reusable-table-2/App'
import Hoc from './HOC'
import HOCpractice from './HOC-practice'
function App() {

  return (
    <>
      <div>
        {/* <Provider store={store}> */}
        {/* <Test1 />
       <Test2 /> */}
        {/* <ReusableTable /> */}
        {/* <ReusableTable2 /> */}
        {/* <Hoc /> */}
        <HOCpractice /> {/*Higher order component */}

        {/* </Provider> */}
      </div>
    </>
  )
}

export default App
