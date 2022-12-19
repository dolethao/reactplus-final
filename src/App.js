
import WelcomeScreen from './Views/WelcomeScreen';
import Registration from './Views/Registration';
import Login from './Views/Login';
import DashBoard from './Views/DashBoard';
import { Routes, Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<WelcomeScreen />} />
        <Route path="/registration" exact element={<Registration />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/dashboard" exact element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
