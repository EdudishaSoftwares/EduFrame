// Modules
import { createContext } from "react";
// Typings
import { TRoutes } from "@/typings/common";

type currentRouteContext = {
  currentRoute?: TRoutes;
};

export default createContext({} as currentRouteContext);
