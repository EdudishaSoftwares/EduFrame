import { Drawer } from "rsuite";
import DrawerComponentProps from "./types";

const DrawerComponent = (props: DrawerComponentProps) => {
  const { children, ...rest } = props;
  return <Drawer {...rest}>{children}</Drawer>;
};

export default DrawerComponent;
