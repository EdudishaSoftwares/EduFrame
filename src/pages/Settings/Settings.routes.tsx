import { Outlet } from "react-router-dom";
import { TRoutes } from "@/typings/common";
import SettingsIcon from "@/atoms/Icons/Settings";

export const BASE_URL = "/setting";

const getSettingRoute = () => {
  const routes: TRoutes[] = [
    {
      path: BASE_URL,
      element: (
        <>
          Setting Page <Outlet />
        </>
      ),
      icon: <SettingsIcon />,
      showOnSideNav: true,
      key: "settings-home",
      label: "Settings",
      children: [
        {
          path: `${BASE_URL}/web-settings`,
          element: <>Website Settings</>,
          label: "Website Settings",
          key: "web-settings",
          showOnSideNav: true
        },
      ],
    },
  ];

  return routes;
};

export default getSettingRoute;
