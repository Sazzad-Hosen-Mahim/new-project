import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import AuthProvider from "./hooks/AuthContextProvider";
import { ThemeProvider } from "./hooks/useTheme";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./layout/Footer";
import PopOverNew from "./components/Popover/Popover";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <NextUIProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <AuthProvider>
              <main className="min-h-full lg:w-[1220px] mx-auto overflow-hidden font-fira text-foreground bg-background ">
                <RouterProvider
                  location={location}
                  key={location}
                  router={routes}
                />
              </main>
              <Footer />
              <PopOverNew />

              <Toaster
                position="bottom-left"
                toastOptions={{
                  duration: 3000,
                  style: {
                    borderRadius: "5px",
                    background: "#333",
                    color: "#fff",
                  },
                }}
              />
            </AuthProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </NextUIProvider>
    </HelmetProvider>
  </React.StrictMode>
);
