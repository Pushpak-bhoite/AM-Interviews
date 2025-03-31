import './App.css'
import { Test1 } from './react-batching/example1'
import { Test2 } from './react-batching/functional-vs-direct-state-update'
import ReusableTable from './reusable-table/App'
import ReusableTable2 from './reusable-table-2/App'
function App() {

  return (
    <>
      <div>
        {/* <Test1 />
       <Test2 /> */}
        {/* <ReusableTable /> */}
        <ReusableTable2/>
      </div>
    </>
  )
}

export default App
