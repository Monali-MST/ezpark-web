import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import PointSystem from "./Pages/PointSystem/PointSystem";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import UserDashboardPage from "./Pages/UserDashboardPage/UserDashboardPage";

function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/pointsystem" element={<PointSystem />} />
            <Route path="/userdashboard/:id" element={<UserDashboardPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
