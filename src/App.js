import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";
import USIPSCNats2024 from "pages/matches/USIPSCNats2024";
import usipscnats24_routes from "pages/matches/USIPSCNats2024/routes";
import ReactGA from "react-ga4";

ReactGA.initialize("G-EG0B598MM3");

export default function App() {
  const location = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location.pathname]);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(usipscnats24_routes)}
        <Route path="/matches/2024-us-ipsc-nats" element={<USIPSCNats2024 />} />
        <Route
          path="*"
          element={<Navigate to="/matches/2024-us-ipsc-nats" />}
        />
      </Routes>
    </ThemeProvider>
  );
}
