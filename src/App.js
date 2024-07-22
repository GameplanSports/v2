import Home from './pages/Home';
import HomeFR from './pages/HomeFR';
import Teams from './pages/Teams';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import CreateTeam from './pages/Createteam';
import Chat from './pages/Chat';

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import './Global.css';

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/createteam" element={<CreateTeam />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/fr" element={<HomeFR />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
