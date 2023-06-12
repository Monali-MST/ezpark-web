import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckoutPayButton from "./Components/CheckoutPayButton/CheckoutPayButton";
import SuccessPay from "./Components/CheckoutPayButton/SuccessPay";
import ClosePay from "./Components/CheckoutPayButton/ClosePay";
import HomePage from "./Pages/HomePage/HomePage";
import PointSystem from "./Pages/PointSystem/PointSystem";
import PointsAddButtonTest from "./Components/PointsAddButtonTest/PointsAddButtonTest";
import RefundButton from "./Components/RefundClientSide/RefundButton";
import SuccessRefund from "./Components/RefundClientSide/SuccessRefund";
import AdminRefundRequestPage from "./Pages/AdminRefundRequestPage/AdminRefundRequestPage";
import ClientRefundRequestPage from "./Pages/ClientRefundRequestPage/ClientRefundRequestPage";
import DiscountSettings from "./Components/DiscountAdminSide/DiscountSettings";


import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pointsystem" element={<PointSystem />} />
            <Route path="/checkoutpay" element={<CheckoutPayButton />} />
            <Route path="/successpay" element={<SuccessPay />} />
            <Route path="/closepay" element={<ClosePay />} />
            <Route path="/pointsaddbutton" element={<PointsAddButtonTest />} />
            <Route path="/refund" element={<RefundButton />} />
            <Route path="/successrefund" element={<SuccessRefund />} />
            <Route path="/discountsettings" element={<DiscountSettings/>}></Route>
            <Route
              path="/adminrefundrequest"
              element={<AdminRefundRequestPage />}
            />
            <Route
              path="/clientrefundrequest"
              element={<ClientRefundRequestPage />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
