import { Route, Routes } from 'react-router-dom'
import Update from './pages/Update'
import Add from './pages/Add'
import Books from './pages/Books'
import Rentals from './pages/Rentals'


function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/'element={<Books />}/>
        <Route path='/add'element={<Add />}/>
        <Route path='/update/:id'element={<Update />}/>
        <Route path='/rentals'element={<Rentals />}/>
      </Routes>
    </div>
  )
}

export default App
