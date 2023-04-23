import { Route, Routes } from 'react-router-dom'
import Update from './pages/Update'
import Add from './pages/Add'
import Books from './pages/Books'
import Rentals from './pages/Rentals'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'


function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/'element={<Books />}/>
        <Route path='/add'element={<Add />}/>
        <Route path='/update/:id'element={<Update />}/>
        <Route path='/rentals'element={<Rentals />}/>
        <Route path='/register'element={<Register />}/>
        <Route path='/login'element={<Login />}/>
        <Route path='/profile'element={<Profile />}/>
      </Routes>
    </div>
  )
}

export default App
