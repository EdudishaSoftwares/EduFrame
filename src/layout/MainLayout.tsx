// Layouts
import SideNav from "@/layout/SideNav";
import Header from "@/layout/Header";
import Body from "@/layout/Body";
// Typings
import { TRoutes } from "@/typings/common";

// Main layout of the dashboard
const MainLayout = (props: {
  routes: TRoutes[];
  childrens: JSX.Element;
}): JSX.Element => {
  const { routes, childrens } = props;

  return (
    <>
      <section style={{ paddingLeft: "60px" }}>
        <SideNav routes={routes} />
        <Header />
        <Body>{childrens}</Body>
      </section>
    </>
  );
};

export default MainLayout;
