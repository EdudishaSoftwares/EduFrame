// Modules
import React from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
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

// Flat the route tree into 1D Array
const flatternRoutes = (routes: TRoutes[]): TRoutes[] => {
  let flatRoutes: TRoutes[] = [];

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];

    if (route.children) {
      flatRoutes.push(route);
      route.children = route.children.map((child) => {
        return {
          ...child,
          parent: route,
        };
      });
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
  const location = useLocation();

  // All routes
  // Spread your routes hear...
  const allRoutes: TRoutes[] = [
    ...SummaryRoutes(),
    ...LoginRoutes(),
    ...SettingRoutes(),
  ];

  const flatternRoutesTree = React.useMemo(() => {
    return flatternRoutes(allRoutes);
  }, [allRoutes]);

  // Get current route accourding to browser location
  const getCurrentRoute = React.useMemo(() => {
    const currentRoute = flatternRoutesTree.find((route: TRoutes) => {
      return route.path === location.pathname;
    });

    console.log("CR>>>>>", currentRoute?.path)

    return currentRoute || flatternRoutesTree[0];
  }, [allRoutes, location]);

  return (
    <CurrentRouteContext.Provider value={{ currentRoute: getCurrentRoute }}>
      <MainLayout
        routes={allRoutes}
        childrens={
          <>
            <Outlet />
            <Routes>{getAllRoutes(allRoutes)}</Routes>
          </>
        }
      />
    </CurrentRouteContext.Provider>
  );
}

export default App;
