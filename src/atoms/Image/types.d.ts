import React from "react";
import { MarginProps } from "../../typings";

export type ImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> &
  MarginProps;
