import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const usePreviousRoute = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [previousRoute, setPreviousRoute] = useState<string | null>(null);

  useEffect(() => {
    setPreviousRoute(location.pathname);
  }, [location]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const getPreviousPageName = (): string => {
    if (!previousRoute) {
      return "Home";
    }
    switch (true) {
      case previousRoute.includes("marketplace"):
        return "Marketplace";
      case previousRoute.includes("orders"):
        return "orders";
      default:
        return "Home";
    }
  };
  return { handleBackClick, previousPageName: getPreviousPageName() };
};
