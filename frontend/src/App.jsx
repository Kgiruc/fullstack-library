import { Route, Routes } from 'react-router-dom'
import Update from './pages/Update'
import Add from './pages/Add'
import Books from './pages/Books'


function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/'element={<Books />}/>
        <Route path='/add'element={<Add />}/>
        <Route path='/update/:id'element={<Update />}/>
      </Routes>
    </div>
  )
}

export default App
