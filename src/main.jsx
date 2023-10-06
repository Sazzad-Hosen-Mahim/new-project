import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import AuthProvider from "./hooks/AuthContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </NextUIProvider>
  </React.StrictMode>
);
