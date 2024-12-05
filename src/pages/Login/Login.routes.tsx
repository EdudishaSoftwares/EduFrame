import { Outlet } from "react-router-dom";
import { TRoutes } from "@/typings/common";
import Payment from "@/atoms/Icons/Payment";

export const BASE_URL = "/login";

const getLoginRoutes = () => {
  const routes: TRoutes[] = [
    {
      path: BASE_URL,
      element: (
        <>
          Login Page <Outlet />
        </>
      ),
      icon: <Payment />,
      showOnSideNav: true,
      key: "login",
      label: "Login",
      children: [
        {
          path: `${BASE_URL}/otp`,
          element: <>Login Otp</>,
          label: "Login Otp",
          key: "login-otp",
          showOnSideNav: true
        },
        {
          path: `${BASE_URL}/signup`,
          element: <>Signup</>,
          label: "Sign up",
          key: "signup",
          showOnTab: true,
          handle: { 
            identifier: "signup"
          },
        },
        {
          path: `${BASE_URL}/signin`,
          element: <>Signin</>,
          label: "Sign in",
          key: "signin",
          showOnTab: true,
          handle: {
            identifier: "signin",
          },
        },
      ],
    },
  ];

  return routes;
};

export default getLoginRoutes;
