import { TRoutes } from "@/typings/common";
import Profitability from "@/atoms/Icons/Profitablity";
import { Outlet } from "react-router-dom";

const BASE_URL = "/summary";

const SummaryRoute = () => {
  const routes: TRoutes[] = [
    {
      path: BASE_URL,
      label: "Summary",
      key: "summary-home",
      element: <> Summary Home <Outlet/> </>,
      showOnSideNav: true,
      icon: <Profitability />
    },
  ];

  return routes;
};

export default SummaryRoute;
