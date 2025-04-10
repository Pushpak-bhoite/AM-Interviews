// import './App.css'
import { Test1 } from './react-batching/example1'
import { Test2 } from './react-batching/functional-vs-direct-state-update'
import ReusableTable from './reusable-table/App'
import ReusableTable2 from './reusable-table-2/App'
import Hoc from './HOC'
import HOCpractice from './HOC-practice'
import CustomHook from './custom-hook'
import ReduxSetUp from './redux'
import HOCpractice3 from './HOC-3'
function App() {

  return (
    <>
      <div>

        {/* <Test1 />
       <Test2 /> */}
        {/* <ReusableTable /> */}
        {/* <ReusableTable2 /> */}
        {/* <Hoc /> */}
        {/*Higher order component */}
        {/* <HOCpractice /> */}
        {/* <CustomHook /> */}
        {/* <ReduxSetUp /> */}
        {/* <HOCpractice3 /> */}

        <div class="grid bg-red-400 grid-cols-3 grid-rows-3 h-64 w-full border border-gray-400">
          <div class="bg-blue-400 col-start-3 row-start-3 p-4 rounded">
            I'm bottom right
          </div>
        </div>


      </div>
    </>
  )
}

export default App
