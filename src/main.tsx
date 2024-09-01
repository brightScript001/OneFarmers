import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui/ErrorFallback";
import { Toaster } from "react-hot-toast";
import { OrderProvider } from "./context/orderProvider";
import { AddProductProvider } from "./context/addProductContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      <OrderProvider>
        <AddProductProvider>
          <App />
          <Toaster />
        </AddProductProvider>
      </OrderProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
