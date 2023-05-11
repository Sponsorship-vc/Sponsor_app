import React from 'react'
import Landing from '../src/pages/Landing/Landing'
import Roleselector from './pages/Roleselector/Roleselector';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import Nav from './components/Landing/Nav'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Landing}/>
          <Route path="/login/role/:id" Component={Login}/>
          <Route path="/signup/role/:id" Component={Signup}/>
          <Route path='/login/role' Component={Roleselector}/>
          <Route path='/signup/role' Component={Roleselector}/>
          <Route path='/dashboard/:id' Component={Dashboard}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
