
import './App.css'
import InputPart from './components/InputPart'
import {ProductTable} from './components/ProductTable'
import { Table } from './components/Table'


function App() {
  return(
    <div className="container">
      <InputPart/>
      <ProductTable/>
    </div>
  )
}

export default App
