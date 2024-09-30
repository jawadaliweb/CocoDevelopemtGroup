// src/index.tsx
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ChakraProvider,
  ColorModeScript,
  theme,
  Spinner,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes, AppRoute } from "./routes/routes.ts";
import Layout from "./Components/Layout.tsx"; // Import the Layout component

import "@fontsource/poppins/200.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/600.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Spinner size="xl" />
            </div>
          }
        >
          <Routes>
            {routes.map((route: AppRoute) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout showNavBar={true}>
                    <route.component />
                  </Layout>
                }
              />
            ))}
            <Route
              path="*"
              element={
                <Layout showNavBar={false}>
                  <App />
                </Layout>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </ChakraProvider>
  </StrictMode>
);
