import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './component/Index'
import Add from './component/Add'
import Prof from './component/Prof'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/Add" element={<Add/>}/>
        <Route path="/Prof" element={<Prof/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App