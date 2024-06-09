import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage/HomePage"

function App() {

  return (
   <Routes>
      <Route path='home' element={<HomePage/>}></Route>
      <Route path='*' element={<HomePage/>}></Route>
   </Routes>
  )
}

export default App
