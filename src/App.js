import React from 'react'
import Landing from '../src/pages/Landing/Landing'
import Roleselector from './pages/Roleselector/Roleselector';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

import Dashb from '../src/components/Dashboard/Dbpages/Dashb';
import Prof from '../src/components/Dashboard/Dbpages/Prof';
import Idea from '../src/components/Dashboard/Dbpages/Idea';
import Inndash from '../src/components/Dashboard/Inndash'
import Spondash from '../src/components/Dashboard/Spondash'
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
          <Route path='/dashboard/innovator' Component={Inndash}>
            <Route path='' Component={Dashb}/>
            <Route path='idea' Component={Idea}/>
            
          </Route>
          <Route path='/dashboard/sponsor' Component={Spondash}>
          <Route path='' Component={Prof}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
