// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Landing from '../src/pages/Landing/Landing';
// import Roleselector from './pages/Roleselector/Roleselector';
// import Login from './pages/Login/Login';
// import Signup from './pages/Signup/Signup';
// import Sidebarsp from './components/Dashboard/Sponsor/Sidebarsp';
// import Sidebarin from './components/Dashboard/Innovator/Sidebarin';
// import InnProfile from './pages/Dashboard/Innovator/InnProfile';
// import Ideasubmission from './pages/Dashboard/Innovator/Ideasubmission';
// import Myideas from './pages/Dashboard/Innovator/Myideas';
// import Help from './pages/Dashboard/common/Help';
// import Sponsor from './pages/Dashboard/Innovator/Sponsors';
// import ChatWindow from './pages/Dashboard/common/ChatWindow';
// import ViewIdea from './pages/Dashboard/Innovator/ViewIdea';
// import EditIdea from './pages/Dashboard/Innovator/EditIdea';
// import Verification from './pages/verify/Verification';
// import SponProfile from './pages/Dashboard/Sponsor/SpoProfile';
// import EditSProfile from './pages/Dashboard/Sponsor/SponProfile';
// import EditProfile from './pages/Dashboard/Innovator/EditProfile';
// import Ideafeed from './pages/Dashboard/Sponsor/Ideafeed';
// import { AuthContext } from './context/AuthContext';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Landing />} />
//           <Route path="/login/role/:id" element={<Login />} />
//           <Route path="/signup/role/:id" element={<Signup />} />
//           <Route path="/login/role" element={<Roleselector />} />
//           <Route path="/signup/role" element={<Roleselector />} />
//           <Route path="/sponsor/verify" element={<Verification />} />

//           <Route path="/dashboard/innovator" element={<Sidebarin />} />
//           <Route path="/dashboard/innovator/profile" element={<InnProfile />} />
//           <Route path="/dashboard/innovator/profile/edit" element={<EditProfile />} />
//           <Route path="/dashboard/innovator/ideasubmission" element={<Ideasubmission />} />
//           <Route path="/dashboard/innovator/ideasubmission/:id" element={<EditIdea />} />
//           <Route path="/dashboard/innovator/myIdeas" element={<Myideas />} />
//           <Route path="/dashboard/innovator/help" element={<Help />} />
//           <Route path="/dashboard/innovator/sponsor" element={<Sponsor />} />
//           <Route path="/dashboard/innovator/chat" element={<ChatWindow />} />
//           <Route path="/dashboard/innovator/myIdeas/:id" element={<ViewIdea />} />

//           <Route path="/dashboard/sponsor" element={<Sidebarsp />} />
//           <Route path="/dashboard/sponsor/profile" element={<SponProfile />} />
//           <Route path="/dashboard/sponsor/profile/edit" element={<EditSProfile />} />
//           <Route path="/dashboard/sponsor/ideafeed" element={<Ideafeed />} />
//           <Route path="/dashboard/sponsor/chat" element={<ChatWindow />} />
//           <Route path="/dashboard/sponsor/help" element={<Help />} />
//           <Route path="/dashboard/sponsor/ideafeed/viewidea/:id" element={<ViewIdea />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import { AuthContext } from './context/AuthContext';

function App() {
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

          <Route path="/dashboard/innovator" element={<Sidebarin />} >
          <Route path="/dashboard/innovator/profile" element={<InnProfile />} />
          <Route path="/dashboard/innovator/profile/edit" element={<EditProfile />} />
          <Route path="/dashboard/innovator/ideasubmission" element={<Ideasubmission />} />
          <Route path="/dashboard/innovator/ideasubmission/:id" element={<EditIdea />} />
          <Route path="/dashboard/innovator/myIdeas" element={<Myideas />} />
          <Route path="/dashboard/innovator/help" element={<Help />} />
          <Route path="/dashboard/innovator/sponsor" element={<Sponsor />} />
          <Route path="/dashboard/innovator/chat" element={<ChatWindow />} />
          <Route path="/dashboard/innovator/myIdeas/:id" element={<ViewIdea />} />
          </Route>

          <Route path="/dashboard/sponsor" element={<Sidebarsp />} >
          <Route path="/dashboard/sponsor/profile" element={<SponProfile />} />
          <Route path="/dashboard/sponsor/profile/edit" element={<EditSProfile />} />
          <Route path="/dashboard/sponsor/ideafeed" element={<Ideafeed />} />
          <Route path="/dashboard/sponsor/chat" element={<ChatWindow />} />
          <Route path="/dashboard/sponsor/help" element={<Help />} />
          <Route path="/dashboard/sponsor/ideafeed/viewidea/:id" element={<ViewIdea />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
