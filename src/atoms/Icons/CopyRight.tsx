import { ColorsMap } from "../../constants";
import { IconProps } from "./types";

const CopyRightIcon = (props: IconProps) => {
  const {
    width = 16,
    height = 16,
    align = "center",
    fill = "black",
    stroke = "black",
    ...rest
  } = props;

  return (
    <svg
      width={width}
      height={height}
      style={{ verticalAlign: align }}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M5 0.21875C4.05436 0.21875 3.12995 0.499165 2.34368 1.02454C1.55741 1.54991 0.944585 2.29664 0.582703 3.1703C0.220822 4.04395 0.126137 5.0053 0.310623 5.93278C0.495108 6.86025 0.950478 7.71218 1.61915 8.38085C2.28782 9.04952 3.13975 9.50489 4.06723 9.68938C4.9947 9.87387 5.95605 9.77918 6.82971 9.4173C7.70337 9.05542 8.4501 8.44259 8.97547 7.65632C9.50084 6.87005 9.78125 5.94564 9.78125 5C9.77976 3.73239 9.27555 2.51713 8.37921 1.62079C7.48288 0.724454 6.26761 0.220239 5 0.21875ZM5 9.21875C4.16561 9.21875 3.34996 8.97132 2.65619 8.50776C1.96242 8.0442 1.42169 7.38532 1.10239 6.61445C0.783078 5.84357 0.699533 4.99532 0.862314 4.17696C1.0251 3.35861 1.42689 2.6069 2.0169 2.01689C2.6069 1.42689 3.35861 1.02509 4.17696 0.862312C4.99532 0.699531 5.84357 0.783076 6.61445 1.10238C7.38532 1.42169 8.0442 1.96242 8.50776 2.65619C8.97133 3.34996 9.21875 4.16561 9.21875 5C9.21751 6.1185 8.77264 7.19084 7.98174 7.98174C7.19084 8.77264 6.1185 9.21751 5 9.21875ZM3.40625 5C3.40625 5.3345 3.5115 5.66052 3.70708 5.93188C3.90267 6.20324 4.17868 6.40619 4.49601 6.51196C4.81335 6.61774 5.15592 6.62099 5.47521 6.52126C5.79449 6.42152 6.0743 6.22385 6.275 5.95625C6.31982 5.89658 6.38651 5.85715 6.46039 5.84665C6.53428 5.83614 6.60931 5.85542 6.66899 5.90023C6.72866 5.94505 6.76809 6.01174 6.77859 6.08563C6.7891 6.15951 6.76982 6.23455 6.725 6.29422C6.4534 6.65615 6.07481 6.92347 5.64286 7.0583C5.2109 7.19314 4.74748 7.18866 4.31821 7.04551C3.88894 6.90235 3.51559 6.62778 3.25103 6.26066C2.98647 5.89355 2.8441 5.45251 2.8441 5C2.8441 4.54749 2.98647 4.10645 3.25103 3.73934C3.51559 3.37223 3.88894 3.09765 4.31821 2.95449C4.74748 2.81134 5.2109 2.80686 5.64286 2.9417C6.07481 3.07653 6.4534 3.34385 6.725 3.70578C6.76982 3.76546 6.7891 3.84049 6.77859 3.91437C6.76809 3.98826 6.72866 4.05495 6.66899 4.09977C6.60931 4.14458 6.53428 4.16386 6.46039 4.15335C6.38651 4.14285 6.31982 4.10342 6.275 4.04375C6.0743 3.77615 5.79449 3.57848 5.47521 3.47874C5.15592 3.37901 4.81335 3.38226 4.49601 3.48804C4.17868 3.59381 3.90267 3.79676 3.70708 4.  06812C3.5115 4.33948 3.40625 4.6655 3.40625 5Z"
        fill={ColorsMap[fill]}
        stroke={ColorsMap[stroke]}
        stroke-width="0.1"
      />
    </svg>
  );
};

export default CopyRightIcon;