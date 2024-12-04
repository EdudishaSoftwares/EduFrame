import { HeadingProps } from "rsuite";
import { Colors, MarginProps, weight } from "../../typings";

type HeadingComponentProps = HeadingProps &
  MarginProps & {
    color?: Colors;
    weight?: weight;
  };

export default HeadingComponentProps;
