import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
