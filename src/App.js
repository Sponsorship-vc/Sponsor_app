import React from 'react'
import Landing from '../src/pages/Landing/Landing'
import Roleselector from './pages/Roleselector/Roleselector';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';


import SponProfile from './pages/Dashboard/Sponsor/SponProfile';
import Sidebarsp from './components/Dashboard/Sponsor/Sidebarsp';
import Sidebarin from './components/Dashboard/Innovator/Sidebarin';
import InnProfile from './pages/Dashboard/Innovator/InnProfile';
import Ideasubmission from './pages/Dashboard/Innovator/Ideasubmission';
import Myideas from './pages/Dashboard/Innovator/Myideas';
import Help from './pages/Dashboard/Innovator/Help';
import Sponsor from './pages/Dashboard/Innovator/Sponsors';
import ChatWindow from './pages/Dashboard/Innovator/ChatWindow'
import ViewIdea from './pages/Dashboard/Innovator/ViewIdea';

// import './style.scss'
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
          <Route path='/dashboard/innovator' Component={Sidebarin}>
            <Route path='profile' Component={InnProfile}/>
            <Route path='ideasubmission' Component={Ideasubmission}/>
            <Route path='myIdeas' Component={Myideas}/>
            <Route path='help' Component={Help}/>
            <Route path='sponsor' Component={Sponsor}/>
            <Route path='chat' Component={ChatWindow}/>
            <Route path='myIdeas/:id' Component={ViewIdea}/>
            
          </Route>
          <Route path='/dashboard/sponsor' Component={Sidebarsp}>
          <Route path='' Component={SponProfile}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
