// Modules
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// Typings
import { TRoutes } from "@/typings/common";
import { SideNavProps } from "./types";
// Atoms
import DropDown from "@/atoms/Icons/DropDown";
import Text from "@/atoms/Text";
// Context Provider
import CurrentRouteContext from "@/contextProvider/CurrentRouteContext";
// style
import { FlexboxGrid } from "rsuite";
import "./SideNav.scss";
import FlexboxGridComponent from "@/atoms/FlexboxGrid/FlexboxGrid";

const SideNavV2 = (props: SideNavProps) => {
  const { routes } = props;

  const { currentRoute: selectedRoute } = useContext(CurrentRouteContext);
  if (!selectedRoute) {
    return <></>;
  }

  //states
  const [expanded, setExpanded] = React.useState(false);

  const validRoutesForNav =
    React.useMemo(() => {
      return routes.filter((route) => !!route.showOnSideNav);
    }, [routes]) || [];

  if (!expanded) {
    return (
      <div className="sidenav-container sidenav-not-expanded">
        <nav
          onMouseEnter={() => {
            setExpanded(true);
          }}
          onMouseLeave={() => {
            setExpanded(false);
          }}
        >
          <div className="sidenav-item-container">
            {validRoutesForNav.map((route) => {
              // ${selectedRoute.key === route.key ? 'selected-menuitem' : ''
              // this code is work only for routes who does not have any child
              return (
                <div className={`sidenav-iconholder`}>
                  <span>{route.icon}</span>
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div className="sidenav-container">
      <nav
        onMouseEnter={() => {
          setExpanded(true);
        }}
        onMouseLeave={() => {
          setExpanded(false);
        }}
      >
        <ExpandedSideNav routes={validRoutesForNav} />
      </nav>
    </div>
  );
};

const ExpandedSideNav = (props: { routes: TRoutes[] }) => {
  const { routes } = props;
  const navigate = useNavigate();

  const { currentRoute: selectedRoute } = useContext(CurrentRouteContext);
  if (!selectedRoute) {
    return <></>;
  }

  const [selectedSubTab, setSelectedSubTab] = React.useState("");

  const selectedTabHandler = (route: TRoutes) => {
    // Side Nav tab not have any child tab
    if (!route.children?.length) {
      setSelectedSubTab(route.key);
      navigate(route.path);
    } else {
      if (selectedSubTab === route.key) {
        setSelectedSubTab("");
      } else {
        setSelectedSubTab(route.key);
      }
    }
  };

  const validRoutesForNav =
    React.useMemo(() => {
      return routes.filter((route) => !!route.showOnSideNav);
    }, [routes]) || [];

  return (
    <div className="sidenav-item-container">
      {validRoutesForNav.map((route) => {
        return (
          <div className={`sidenav-item-container`}>
            <FlexboxGrid
              className={`menuitem-holder ${
                selectedSubTab === route.key && "selected-menuitem"
              }`}
              align="middle"
              onClick={() => {
                selectedTabHandler(route);
              }}
            >
              {route.icon}
              <Text
                size="lg"
                className={
                  selectedRoute.key === route.key
                    ? "selected-menuitem-color"
                    : ""
                }
              >
                {route.label}
              </Text>
              
              <div className="dropdown-container">
                {route.children?.length ? (
                  <DropDown rotate={route.key === selectedSubTab ? `top` : `bottom`} fillPath="#686868" />
                ) : (
                  <></>
                )}
              </div>
            </FlexboxGrid>

            {route.children?.length && selectedSubTab === route.key ? (
              <div
                className="submenuitem-holder"
                style={{ height: validRoutesForNav.length * 44 }}
              >
                {route.children.map((route, index) => {
                  return (
                    <Link to={route.path} key={`submenu-item-${index}`}>
                      <FlexboxGridComponent
                        as="div"
                        justify="space-between"
                        align="middle"
                      >
                        <Text
                          size="lg"
                          className={
                            selectedRoute.key === route.key
                              ? "selected-menuitem-color"
                              : ""
                          }
                        >
                          {route.label}
                        </Text>
                      </FlexboxGridComponent>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SideNavV2;
