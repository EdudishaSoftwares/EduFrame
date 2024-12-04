import { LinkProps, RelativeRoutingType } from "react-router-dom";
import { Colors, MarginProps } from "../../typings";

export type LinkComponentProps = Omit<LinkProps, "relative"> &
  MarginProps & {
    relative: RelativeRoutingType | "full";
    hoverColor?: Colors;
    underline?: boolean;
    noHoverUnderline?: boolean;
  };
