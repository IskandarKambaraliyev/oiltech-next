import React from "react";

export const SearchIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ? className : ""}`}
    >
      <path
        d="M7.24988 12.5C10.1494 12.5 12.4999 10.1495 12.4999 7.25C12.4999 4.35051 10.1494 2 7.24988 2C4.35038 2 1.99988 4.35051 1.99988 7.25C1.99988 10.1495 4.35038 12.5 7.24988 12.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.962 10.9625L13.9996 14.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SpinnerIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      className={`${className ? className : ""}`}
    >
      <path
        fill="currentColor"
        d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
      >
        <animateTransform
          attributeName="transform"
          dur="1s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        />
      </path>
    </svg>
  );
};

export const MenuIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ? className : ""}`}
    >
      <path
        d="M2.5 8H13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 4H13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12H13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MailICon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ? className : ""}`}
    >
      <path
        d="M2 3.5H14V12C14 12.1326 13.9473 12.2598 13.8536 12.3536C13.7598 12.4473 13.6326 12.5 13.5 12.5H2.5C2.36739 12.5 2.24021 12.4473 2.14645 12.3536C2.05268 12.2598 2 12.1326 2 12V3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 3.5L8 9L2 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PhoneICon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ? className : ""}`}
    >
      <path
        d="M9.96359 2.5C10.8112 2.72796 11.5841 3.17464 12.2047 3.79529C12.8254 4.41595 13.272 5.18879 13.5 6.03641"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.44582 4.43234C9.9544 4.56912 10.4181 4.83713 10.7905 5.20952C11.1629 5.58191 11.4309 6.04562 11.5677 6.55419"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.77977 7.80095C6.29842 8.86129 7.15792 9.71689 8.2206 10.2307C8.29835 10.2675 8.38436 10.2835 8.47015 10.277C8.55595 10.2705 8.63857 10.2418 8.7099 10.1937L10.2746 9.15028C10.3438 9.10414 10.4235 9.07598 10.5063 9.06838C10.5891 9.06077 10.6725 9.07394 10.749 9.10671L13.6763 10.3613C13.7757 10.4035 13.8588 10.4769 13.9128 10.5705C13.9669 10.664 13.9892 10.7726 13.9762 10.8798C13.8837 11.6038 13.5304 12.2693 12.9826 12.7516C12.4347 13.2339 11.7299 13.5 11 13.5C8.74566 13.5 6.58365 12.6045 4.98959 11.0104C3.39553 9.41635 2.5 7.25434 2.5 5C2.50004 4.27011 2.76612 3.56526 3.24843 3.01742C3.73073 2.46959 4.39618 2.11634 5.12019 2.02381C5.22745 2.01083 5.33602 2.03306 5.42955 2.08715C5.52307 2.14124 5.59649 2.22426 5.63873 2.3237L6.89439 5.25357C6.92687 5.32935 6.9401 5.41199 6.93291 5.49413C6.92572 5.57626 6.89833 5.65535 6.85318 5.72434L5.81341 7.31307C5.76608 7.38454 5.7381 7.46706 5.73221 7.55257C5.72631 7.63809 5.7427 7.72367 5.77977 7.80095V7.80095Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
