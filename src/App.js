import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Landing from '../src/pages/Landing/Landing';
import Roleselector from './pages/Roleselector/Roleselector';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Sidebarsp from './components/Dashboard/Sponsor/Sidebarsp';
import Sidebarin from './components/Dashboard/Innovator/Sidebarin';
import InnProfile from './pages/Dashboard/Innovator/InnProfile';
import Ideasubmission from './pages/Dashboard/Innovator/Ideasubmission';
import Myideas from './pages/Dashboard/Innovator/Myideas';
import Help from './pages/Dashboard/common/Help';
import Sponsor from './pages/Dashboard/Innovator/Sponsors';
import ChatWindow from './pages/Dashboard/common/ChatWindow';
import ViewIdea from './pages/Dashboard/Innovator/ViewIdea';
import EditIdea from './pages/Dashboard/Innovator/EditIdea';
import Verification from './pages/verify/Verification';
import SponProfile from './pages/Dashboard/Sponsor/SpoProfile';
import EditSProfile from './pages/Dashboard/Sponsor/SponProfile';
import EditProfile from './pages/Dashboard/Innovator/EditProfile';
import Ideafeed from './pages/Dashboard/Sponsor/Ideafeed';
import { userData } from './data/Userdata';
import { AuthContext } from './context/AuthContext';
import Notfound from './pages/Notfound/Notfound'


function PrivateRoute({ children }) {
  const Auth = useContext(AuthContext);
  console.log('currentuser',Auth)

  if (Auth.currentUser) {
    return children;
  }

  return <Navigate to="/login/role" />;
}

function App() {

  const [userList, setuserList] = useState('');

  useEffect(() => {
    userData.then(
      (value) => {
        setuserList(value[0]);
        console.log(userList);
      },
      (reason) => {
        console.error(reason);
      }
    );
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login/role/:id" element={<Login />} />
          <Route path="/signup/role/:id" element={<Signup />} />
          <Route path="/login/role" element={<Roleselector />} />
          <Route path="/signup/role" element={<Roleselector />} />
          <Route path="/sponsor/verify" element={<Verification />} />
          <Route exact path="*" element={<Notfound/>} />
          

          <Route path="/dashboard/innovator" element={<PrivateRoute> <Sidebarin /> </PrivateRoute>}>
            <Route path="/dashboard/innovator/profile" element={<PrivateRoute> <InnProfile /> </PrivateRoute>} />
            <Route path="/dashboard/innovator/profile/edit" element={<PrivateRoute> <EditProfile /> </PrivateRoute>} />
            <Route path="/dashboard/innovator/ideasubmission" element={<PrivateRoute> <Ideasubmission /> </PrivateRoute>} />
            <Route path="/dashboard/innovator/ideasubmission/:id" element={<PrivateRoute> <EditIdea /> </PrivateRoute>} />
            <Route path="/dashboard/innovator/myIdeas" element={<PrivateRoute> <Myideas /> </PrivateRoute>} />
            <Route path="/dashboard/innovator/help" element={<PrivateRoute> <Help /> </PrivateRoute>} />
            <Route path="/dashboard/innovator/sponsor" element={<PrivateRoute> <Sponsor /> </PrivateRoute>} />
            <Route path="/dashboard/innovator/chat" element={<PrivateRoute> <ChatWindow /> </PrivateRoute>} />
            <Route path="/dashboard/innovator/myIdeas/:id" element={<PrivateRoute> <ViewIdea /> </PrivateRoute>} />
          </Route>

          {userList && userList.verify === true ? (
          <Route path="/dashboard/sponsor" element={<PrivateRoute> <Sidebarsp /> </PrivateRoute>}>
            <Route path="/dashboard/sponsor/profile" element={<PrivateRoute> <SponProfile /> </PrivateRoute>} />
            <Route path="/dashboard/sponsor/profile/edit" element={<PrivateRoute> <EditSProfile /> </PrivateRoute>} />
            <Route path="/dashboard/sponsor/ideafeed" element={<PrivateRoute> <Ideafeed /> </PrivateRoute>} />
            <Route path="/dashboard/sponsor/chat" element={<PrivateRoute> <ChatWindow /> </PrivateRoute>} />
            <Route path="/dashboard/sponsor/help" element={<PrivateRoute> <Help /> </PrivateRoute>} />
            <Route
              path="/dashboard/sponsor/ideafeed/viewidea/:id"
              element={<PrivateRoute> <ViewIdea /> </PrivateRoute>}
            />
          </Route>
        ) : (
          userList && userList.role === 'sponsor' &&
          <Route path="/dashboard/sponsor/profile" element={<Verification />} />
        )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
