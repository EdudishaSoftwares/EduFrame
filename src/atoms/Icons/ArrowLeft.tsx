import { ColorsMap } from "../../constants";
import { IconProps } from "./types";

const ArrowLeftIcon = (props: IconProps) => {
  const {
    width = 16,
    height = 16,
    align = "center",
    fill = "black",
    ...rest
  } = props;

  return (
    <svg
      width={width}
      height={height}
      style={{ verticalAlign: align }}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z"
        fill={ColorsMap[fill]}
      />
    </svg>
  );
};

export default ArrowLeftIcon;
