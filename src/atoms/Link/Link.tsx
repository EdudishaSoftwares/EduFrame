import { Link } from "react-router-dom";
import { LinkComponentProps } from "./types";
import classNames from "classnames/bind";
import style from "./Link.module.scss";
const cx = classNames.bind(style);

const LinkComponent = (props: LinkComponentProps): JSX.Element => {
  const {
    relative,
    children,
    target,
    underline,
    noHoverUnderline,
    download,
    className,
    hoverColor = "blue",
    mt,
    ml,
    mb,
    mr,
    ...rest
  } = props;
  if (relative === "full")
    return (
      <a
        className={cx(
          className,
          "common-font-style",
          `${hoverColor ? `hoverColor-${hoverColor}` : ""}`,
          `${mt ? `mt-${mt}` : ""}`,
          `${ml ? `ml-${ml}` : ""}`,
          `${mb ? `mb-${mb}` : ""}`,
          `${mr ? `mr-${mr}` : ""}`,
          `${underline ? `underline` : ""}`,
          `${noHoverUnderline ? `noHoverUnderline` : ""}`
        )}
        href={rest.to as string}
        target={target}
        download={download}
      >
        {children}
      </a>
    );
  return (
    <Link
      className={underline ? cx(`underline`) : ``}
      target={target}
      children={children}
      {...rest}
    />
  );
};

export default LinkComponent;
