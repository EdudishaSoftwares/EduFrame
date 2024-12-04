import { ImageProps } from "./types";
import style from "./Image.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const Image = (props: ImageProps) => {
  const { src, alt, className, mt, ml, mb, mr, ...rest } = props;

  return (
    <img
      src={src}
      alt={alt}
      {...rest}
      className={cx(
        `${mt ? `mt-${mt}` : ""}`,
        `${ml ? `ml-${ml}` : ""}`,
        `${mb ? `mb-${mb}` : ""}`,
        `${mr ? `mr-${mr}` : ""}`,
        className
      )}
    />
  );
};

export default Image;
