import React from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
// Pages
import LoginRoutes from "@/pages/Login";
import SummaryRoutes from "@/pages/Summary";
import SettingRoutes from "@/pages/Settings";
// Layout
import MainLayout from "@/layout";
// Context Provider
import CurrentRouteContext from "@/contextProvider/CurrentRouteContext";
// Typings
import { TRoutes } from "@/typings/common";

// Flatten the route tree into a 1D Array
const flatternRoutes = (routes: TRoutes[]): TRoutes[] => {
  let flatRoutes: TRoutes[] = [];

  for (const route of routes) {
    if (route.children) {
      flatRoutes.push(route);
      route.children = route.children.map((child) => ({
        ...child,
        parent: route,
      }));
      flatRoutes = [...flatRoutes, ...flatternRoutes(route.children)];
    } else {
      flatRoutes.push(route);
    }
  }

  return flatRoutes;
};

// Get all the routes
const getAllRoutes = (routes: TRoutes[]) => {
  return routes.map((route) => (
    <Route key={route.key} path={route.path} element={route.element}>
      {route.children && getAllRoutes(route.children)}
    </Route>
  ));
};

function App() {
  // Simulated user login state
  const isUserLoggedIn = false; // Replace this with actual login state logic.

  const location = useLocation();

  // Login-only routes
  const loginRoutes: TRoutes[] = React.useMemo(() => [...LoginRoutes()], []);

  // Authenticated routes
  const authRoutes: TRoutes[] = React.useMemo(() => [
    ...SummaryRoutes(),
    ...SettingRoutes(),
  ], []);

  // Flattened routes for both login and authenticated
  const flatternLoginRoutes = React.useMemo(() => flatternRoutes(loginRoutes), [loginRoutes]);
  const flatternAuthRoutes = React.useMemo(() => flatternRoutes(authRoutes), [authRoutes]);

  const getCurrentRoute = React.useMemo(() => {
    const allRoutes = [...flatternLoginRoutes, ...flatternAuthRoutes];
    const currentRoute = allRoutes.find((route: TRoutes) => route.path === location.pathname);

    return currentRoute || flatternAuthRoutes[0]; // Default to the first authenticated route if not found.
  }, [flatternLoginRoutes, flatternAuthRoutes, location]);

  // Check if the current route is part of login routes
  const isLoginRoute = flatternLoginRoutes.some((route) => route.path === location.pathname);

  // Redirect to /login if not logged in and not on a login route
  if (!isUserLoggedIn && !isLoginRoute) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      {isUserLoggedIn ? (
        // Render authenticated routes inside MainLayout
        <CurrentRouteContext.Provider value={{ currentRoute: getCurrentRoute }}>
          <MainLayout
            routes={authRoutes}
            childrens={
              <>
                <Outlet />
                <Routes>{getAllRoutes(authRoutes)}</Routes>
              </>
            }
          />
        </CurrentRouteContext.Provider>
      ) : (
        // Render login-only routes without MainLayout
        <Routes>{getAllRoutes(loginRoutes)}</Routes>
      )}
    </>
  );
}

export default App;
