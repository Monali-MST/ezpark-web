import { BrowserRouter, Routes, Route} from "react-router-dom";
import CheckoutPayButton from "./Components/CheckoutPayButton/CheckoutPayButton";
import SuccessPay from "./Components/CheckoutPayButton/SuccessPay";
import ClosePay from "./Components/CheckoutPayButton/ClosePay";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import PointSystem from "./Pages/PointSystem/PointSystem";
import UserDashboardPage from "./Pages/UserDashboardPage/UserDashboardPage";

function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/pointsystem" element={<PointSystem />} />
            <Route path="/userdashboard/:id" element={<UserDashboardPage />} />
            <Route path="/checkoutpay" element={<CheckoutPayButton />} />
            <Route path="/successpay" element={<SuccessPay />} />
            <Route path="/closepay" element={<ClosePay />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
