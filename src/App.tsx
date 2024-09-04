import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import SpinnerComponent from "./ui/Spinner";
import Home from "./HomePage/Index";
import Login from "./Auth/LogIn";
import VerifyEmail from "./Auth/VerifyEmail";
import ForgotPassword from "./Auth/ForgotPassword";
import PasswordReset from "./Auth/ResetPassword";
import MarketPlaceIndex from "./FarmerDashboard/MarketPlace/CreateProduct/Page";
import { Order } from "./FarmerDashboard/MarketPlace/Orders/Page";
import OrderSummary from "./FarmerDashboard/MarketPlace/Orders/OrderDetails/Page";
import DisputePage from "./FarmerDashboard/MarketPlace/Orders/Dispute/Page";

const RegisterSeller = lazy(() => import("./Auth/SignUp"));
const RegisterBuyer = lazy(() => import("./Auth/SignUp"));
const FarmerDashboard = lazy(
  () => import("./FarmerDashboard/DashboardHome/Dashboard")
);
const FarmerDashboardHome = lazy(
  () => import("./FarmerDashboard/DashboardHome/Page")
);
const MarketPlace = lazy(
  () => import("./FarmerDashboard/MarketPlace/MarketPlace")
);
const CreateProductWrapper = lazy(
  () => import("./FarmerDashboard/MarketPlace/CreateProduct/Wrapper")
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
          <Route path="/farmer-dashboard" element={<FarmerDashboard />}>
            <Route path="home" element={<FarmerDashboardHome />} />
            <Route path="marketplace" element={<MarketPlace />}>
              <Route index element={<MarketPlaceIndex />} />
              <Route path="create-product" element={<CreateProductWrapper />} />
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
