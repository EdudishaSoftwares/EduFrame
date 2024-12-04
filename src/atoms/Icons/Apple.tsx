import { ColorsMap } from "../../constants";
import { IconProps } from "./types";

const AppleIcon = (props: IconProps) => {
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
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M7.5885 2.58842C7.047 3.13042 6.0185 2.98092 6.0185 2.98092C6.0185 2.98092 5.8695 1.95292 6.4115 1.41092C6.953 0.869419 7.9815 1.01892 7.9815 1.01892C7.9815 1.01892 8.1305 2.04642 7.5885 2.58842ZM2 7.02992C2 8.67042 3.098 10.5549 4.2095 10.9534C4.5945 11.0914 4.993 10.9009 5.324 10.6634C5.575 10.4834 5.879 10.3119 6.125 10.3119C6.37 10.3119 6.675 10.4834 6.9255 10.6634C7.2565 10.9009 7.655 11.0914 8.0405 10.9534C8.83 10.6704 9.613 9.63692 10 8.47342C9.25 8.25842 8.703 7.58042 8.703 6.77692C8.703 6.04092 9.1625 5.40992 9.816 5.14442C9.395 4.39642 8.707 3.99992 7.9295 3.99992C7.5275 3.99992 7.1575 4.16192 6.8595 4.35642C6.3825 4.66642 5.867 4.66642 5.3905 4.35642C5.092 4.16192 4.7225 3.99992 4.3205 3.99992C3.0385 3.99992 2 5.07742 2 7.02992Z"
        stroke={ColorsMap[stroke]}
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default AppleIcon;
