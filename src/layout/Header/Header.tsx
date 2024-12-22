import FlexboxGrid from "@/atoms/FlexboxGrid";
import Text from "@/atoms/Text";
import CurrentRouteContext from "@/contextProvider/CurrentRouteContext";
import { TRoutes } from "@/typings/common";
import React, { useContext } from "react";
import { Route, useNavigate } from "react-router-dom";
import { Message, Nav } from "rsuite";

const Header = () => {
  const navigate = useNavigate();
  const { currentRoute: selectedRoute } = useContext(CurrentRouteContext);

  if (!selectedRoute) {
    return <></>;
  }

  const validAvailableTabs = React.useMemo(() => {
    const { handle } = selectedRoute;
    if (handle?.identifier === "root") {
      return selectedRoute;
    }
    return selectedRoute.parent || selectedRoute;
  }, [selectedRoute]);

  const validRoutesForNav: TRoutes[] =
    React.useMemo(() => {
      return (
        validAvailableTabs.children?.filter((route) => !!route.showOnTab) || []
      );
    }, [selectedRoute, validAvailableTabs]) || [];

  React.useEffect(() => {
    console.log("USE>>>>", validRoutesForNav);
    navigate(validRoutesForNav?.[0]?.path);
  }, []);

  // return (
  //   <FlexboxGrid
  //     direction="row"
  //     align={"middle"}
  //     className={"header"}
  //     justify="space-between"
  //   >
  //     <Text >{selectedRoute.label}</Text>

  //   </FlexboxGrid>
  // );

  return (
    <Nav appearance="subtle" defaultActiveKey={validRoutesForNav?.[0]?.key}>
      {validRoutesForNav.map((route) => {
        return (
          <Nav.Item
            eventKey={route.key}
            onClick={() => {
              navigate(route.path);
            }}
          >
            {route.label}
          </Nav.Item>
        );
      })}
    </Nav>
  );
};

export default Header;
