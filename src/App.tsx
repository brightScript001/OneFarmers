import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import SpinnerComponent from "./ui/Spinner";

const Home = lazy(() => import("./HomePage/Index"));
const RegisterSeller = lazy(() => import("./Auth/SignUp"));
const RegisterBuyer = lazy(() => import("./Auth/SignUp"));
const Login = lazy(() => import("./Auth/LogIn"));
const VerifyEmail = lazy(() => import("./Auth/VerifyEmail"));
const ForgotPassword = lazy(() => import("./Auth/ForgotPassword"));
const PasswordReset = lazy(() => import("./Auth/ResetPassword"));
const FarmerDashboard = lazy(
  () => import("./FarmerDashboard/DashboardHome/Dashboard")
);
const FarmerDashboardHome = lazy(
  () => import("./FarmerDashboard/DashboardHome/DashboardHome")
);
const MarketPlace = lazy(
  () => import("./FarmerDashboard/MarketPlace/MarketPlace")
);
const CreateProductWrapper = lazy(
  () =>
    import("./FarmerDashboard/MarketPlace/CreateProduct/CreateProductWrapper")
);
const MarketPlaceIndex = lazy(
  () => import("./FarmerDashboard/MarketPlace/CreateProduct/MarketPlaceIndex")
);

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Suspense fallback={<SpinnerComponent />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register/seller" element={<RegisterSeller />} />
          <Route path="/register/buyer" element={<RegisterBuyer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<PasswordReset />} />
          <Route path="/farmer-dashboard" element={<FarmerDashboard />}>
            <Route path="home" element={<FarmerDashboardHome />} />
            <Route path="marketplace" element={<MarketPlace />}>
              <Route index element={<MarketPlaceIndex />} />
              <Route path="create-product" element={<CreateProductWrapper />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
