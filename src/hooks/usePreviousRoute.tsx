import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useNavigationHistory = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [history, setHistory] = useState<string[]>([]);
  const [currentRoute, setCurrentRoute] = useState<string>(location.pathname);

  useEffect(() => {
    const updatedHistory = [...history, currentRoute];
    setHistory(updatedHistory);
    setCurrentRoute(location.pathname);
  }, [location]);

  const handleBackClick = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      const previousRoute = newHistory[newHistory.length - 1];
      navigate(previousRoute);
      setHistory(newHistory);
    } else {
      navigate("/farmer-dashboard/home");
    }
  };

  const getPreviousPageName = (): string => {
    if (history.length <= 1) return "Home";
    const previousRoute = history[history.length - 2];
    const routeMap: { [key: string]: string } = {
      "/marketplace": "Marketplace",
      "/create-product": "Create Product",
      "/orders": "Orders",
    };
    return routeMap[previousRoute] || "Home";
  };

  const getCurrentPageName = (): string => {
    const currentPage = currentRoute.split("/").pop();
    const cleanPage = currentPage!.replace(/[^a-zA-Z0-9-]/g, "");
    const words = cleanPage.split("-");
    const capitalizedPageName = words
      .map((word, index) => {
        if (index === 0) return word.charAt(0).toUpperCase() + word.slice(1);
        return word;
      })
      .join(" ");
    return capitalizedPageName || "Home";
  };

  return {
    handleBackClick,
    previousPageName: getPreviousPageName(),
    currentPageName: getCurrentPageName(),
  };
};
