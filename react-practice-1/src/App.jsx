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
import UseMemo from './useMemo-useCallback-memo/parent'
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

        <UseMemo />

      </div>
    </>
  )
}

export default App
