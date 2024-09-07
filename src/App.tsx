import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import SpinnerComponent from "./ui/Spinner";
import Home from "./HomePage/Index";
import Login from "./Auth/LogIn";
import VerifyEmail from "./Auth/VerifyEmail";
import ForgotPassword from "./Auth/ForgotPassword";
import PasswordReset from "./Auth/ResetPassword";
import RegisterSeller from "./Auth/SignUp";
import RegisterBuyer from "./Auth/SignUp";
import MarketPlaceIndex from "./FarmerDashboard/MarketPlace/CreateProduct/Page";
import DisputePage from "./FarmerDashboard/MarketPlace/Orders/Dispute/Page";

const Order = lazy(() => import("./FarmerDashboard/MarketPlace/Orders/Page"));
const OrderSummary = lazy(
  () => import("./FarmerDashboard/MarketPlace/Orders/OrderDetails/Page")
);
const FarmerDashboardHome = lazy(
  () => import("./FarmerDashboard/DashboardHome/Page")
);
const MarketPlace = lazy(
  () => import("./FarmerDashboard/MarketPlace/MarketPlace")
);

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Suspense fallback={<SpinnerComponent />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<PasswordReset />} />
          <Route path="/register/seller" element={<RegisterSeller />} />
          <Route path="/register/buyer" element={<RegisterBuyer />} />

          {/* Lazy-loaded routes */}
          <Route path="/farmer-dashboard">
            <Route path="home" element={<FarmerDashboardHome />} />
            <Route path="marketplace" element={<MarketPlace />}>
              <Route index element={<MarketPlaceIndex />} />
              <Route path="orders/:status" element={<Order />} />
              <Route path="order-summary/:orderId" element={<OrderSummary />} />
              <Route
                path="order-summary/:orderId/dispute"
                element={<DisputePage />}
              />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
