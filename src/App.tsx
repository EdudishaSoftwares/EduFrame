import { TRoutes } from "@/typings/common"
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import LoginRoutes from "@/pages/Login";

const getAllRoutes = (routes: TRoutes[]) => {
  return routes.map((route) => (
    <Route key={route.key} path={route.path} element={route.element}>
      {route.children && getAllRoutes(route.children)}
    </Route>
  ));
}

function App() {
  // All routes
  const allRoutes: TRoutes[] = [
    ...LoginRoutes(),
  ];
  return (
    <BrowserRouter>
      <Routes>{getAllRoutes(allRoutes)}</Routes>
    </BrowserRouter>
  )
}

export default App
