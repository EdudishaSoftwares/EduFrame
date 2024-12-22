import { Colors } from "../../typings";
export type IconProps = {
  width?: number;
  height?: number;
  fillPath?: string;
  contentGap?: 'sm' | 'md' | 'lg';
  align?: 'top' | 'middle' | 'bottom';
  fill?: Colors;
  stroke?: Colors;
}
