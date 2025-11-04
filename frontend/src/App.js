import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RegistrationSuccess from './Components/RegistrationSuccess';
import DonorDashboard from './pages/DonorDashboard';
import FindDonors from './pages/FindDonors';
import EmergencyBloodRequest from './pages/EmergencyBloodRequest';
import HealthTips from './pages/HealthTips';
import {Routes, Route} from "react-router-dom";
import './App.css';

function App() { 
  return (
    <div> 
     <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/successMessage" element={<RegistrationSuccess />} />
            <Route path="/donordashboard/:userId" element={<DonorDashboard />} />
            <Route path="/findDonors" element={<FindDonors />} />
            <Route path="/bloodRequest" element={<EmergencyBloodRequest />} />
            <Route path="/healthTips" element={<HealthTips />} />
        </Routes>
    </div>
  );
}

export default App;
