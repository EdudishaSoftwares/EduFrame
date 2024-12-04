import { ColorsMap } from "../../constants";
import { IconProps } from "./types";

const ThunderIcon = (props: IconProps) => {
  const {
    width = 16,
    height = 16,
    align = "center",
    stroke = "black",
    ...rest
  } = props;

  return (
    <svg
      width={width}
      height={height}
      style={{ verticalAlign: align }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M17.6837 3.60303C18.2047 2.94403 17.7137 2.00003 16.8477 2.00003H10.1317C9.94984 1.9987 9.7707 2.04418 9.61151 2.1321C9.45231 2.22001 9.31841 2.34741 9.22269 2.50203L4.14069 10.958C3.73969 11.624 4.24369 12.455 5.04869 12.455H8.47769L5.24769 20.52C4.78069 21.54 6.04269 22.473 6.89069 21.735L19.9997 9.33103H13.1507L17.6837 3.60303Z"
        stroke={ColorsMap[stroke]}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ThunderIcon;
