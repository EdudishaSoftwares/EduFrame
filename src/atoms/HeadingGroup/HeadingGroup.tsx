import { HeadingGroup } from "rsuite";
import HeadingGroupComponentProps from "./types";

const HeadingGroupComponent = (props: HeadingGroupComponentProps) => {
  const { children, ...rest } = props;
  return <HeadingGroup {...rest}>{children}</HeadingGroup>;
};

export default HeadingGroupComponent;
