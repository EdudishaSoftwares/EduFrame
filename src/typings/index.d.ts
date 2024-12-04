export interface WithAsProps<
  As extends React.ElementType | string = React.ElementType
> extends StandardProps {
  as?: As;
}

export type Colors =
  | "violet"
  | "purple"
  | "purple-2"
  | "indigo"
  | "blue"
  | "blue-1"
  | "blue-2"
  | "blue-3"
  | "blue-4"
  | "blue-5"
  | "green"
  | "green-2"
  | "yellow"
  | "orange"
  | "red"
  | "pink"
  | "white"
  | "grey"
  | "grey-1"
  | "grey-2"
  | "grey-3"
  | "grey-4"
  | "grey-5"
  | "grey-6"
  | "black"
  | "black-1";

export type Sizes = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "full";

export type weight =
  | "thin"
  | "light"
  | "regular"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold";

export type MarginProps = {
  mt?: Sizes;
  ml?: Sizes;
  mb?: Sizes;
  mr?: Sizes;
};

export type PaddingProps = {
  pt?: Sizes;
  pl?: Sizes;
  pb?: Sizes;
  pr?: Sizes;
};
