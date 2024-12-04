import { Heading } from "rsuite";
import HeadingComponentProps from "./types";
import style from "./Heading.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const HeadingComponent = (props: HeadingComponentProps) => {
  const { children, className, weight, color, mt, ml, mb, mr, ...rest } = props;
  return (
    <Heading
      {...rest}
      className={cx(
        "heading",
        `${weight ? `weight-${weight}` : ""}`,
        `${color ? `color-${color}` : ""}`,
        `${mt ? `mt-${mt}` : ""}`,
        `${ml ? `ml-${ml}` : ""}`,
        `${mb ? `mb-${mb}` : ""}`,
        `${mr ? `mr-${mr}` : ""}`,
        className
      )}
    >
      {children}
    </Heading>
  );
};

export default HeadingComponent;
