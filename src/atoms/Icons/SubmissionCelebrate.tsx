import { IconProps } from "./types";

const SubmissionCelebrateIcon = (props: IconProps) => {
  const { width = 16, height = 16, align = "center", ...rest } = props;

  return (
    <svg
      width={width}
      height={height}
      style={{ verticalAlign: align }}
      viewBox="0 0 161 139"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle cx="84" cy="77" r="50" fill="#43D296" />
      <path
        d="M56 78.1733L74.6667 96.7L93.3333 76.85L112 57"
        stroke="white"
        stroke-width="8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="145" cy="115" r="8" fill="#BDA3FF" />
      <circle cx="38" cy="131" r="8" fill="#30AFFF" fill-opacity="0.8" />
      <circle cx="8" cy="69" r="8" fill="#DA1600" fill-opacity="0.7" />
      <circle cx="153" cy="43" r="8" fill="#6DB8FF" />
      <circle cx="95" cy="9" r="8" fill="#FFB636" />
      <path
        d="M29.541 29.1807C28.7543 26.2088 27.7049 22.7698 25.1694 20.8387C22.5444 18.8393 19.4333 18.0753 16.2225 17.6707C14.649 17.4725 13.0303 17.4221 11.4675 17.1617C11.2882 17.1318 11.0776 17.1543 11.0004 17"
        stroke="#FF6D83"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M149.198 25.516C147.546 25.516 146.279 26.1619 144.641 26.1619C143.354 26.1619 142.5 25.501 141.5 24.501C141.111 24.1116 139.206 22.4417 138.792 21.7125C136.841 18.2784 137.634 11.8337 140.012 8.88461C141.76 6.71721 143.459 5.07619 145.717 3.48434C146.827 2.70173 147.795 2.48156 148.875 1.94141"
        stroke="#FFB636"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M126.443 129.611C129.499 129.917 132.284 131.755 134.052 134.113C134.48 134.684 136.101 135.651 136.726 135.964C137.732 136.467 138.896 137.426 140.016 137.426"
        stroke="#79A9FB"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M14.191 124.521C12.3502 124.214 11.5349 121.17 12.2446 119.655C12.8647 118.331 14.6488 117.916 15.9394 117.783C19.0378 117.462 21.9732 117.989 25.0278 118.335C29.1437 118.802 29.5546 114.108 27.2546 111.639C25.748 110.022 23.7186 109.527 21.6135 109.527"
        stroke="#7612FA"
        stroke-opacity="0.6"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default SubmissionCelebrateIcon;
