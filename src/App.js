import React from 'react'
import Landing from '../src/pages/Landing/Landing'
import Roleselector from './pages/Roleselector/Roleselector';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Landing}/>
          <Route path="/login/role/:id" Component={Login}/>
          <Route path='/signup' Component={Signup}/>
          <Route path='/login/role' Component={Roleselector}/>
          <Route path='/signup/role' Component={Roleselector}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
