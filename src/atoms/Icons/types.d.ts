import { Colors } from "../../typings";

export type IconProps = {
  width?: number;
  height?: number;
  align?: "top" | "middle" | "bottom";
  fill?: Colors;
  stroke?: Colors;
  onClick?: () => void;
};

// Update types later
