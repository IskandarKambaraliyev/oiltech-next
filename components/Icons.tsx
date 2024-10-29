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

export const XIcon = ({ className }: { className?: string }) => {
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
        d="M12.5 3.5L3.5 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 12.5L3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PlayIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="18"
      height="22"
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ? className : ""}`}
    >
      <path
        d="M18 11L9.2855e-07 21.3923L1.83707e-06 0.607695L18 11Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ReturnIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ? className : ""}`}
    >
      <path
        d="M16 20L22 26L28 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 8H22V26"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const TelegramCircleIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ? className : ""}`}
    >
      <circle cx="12" cy="12" r="12" fill="white" />
      <path
        d="M17.5995 6.84933C17.5995 6.84933 18.8483 6.36236 18.7438 7.54489C18.7094 8.03186 18.3973 9.73639 18.1543 11.5798L17.3218 17.0408C17.3218 17.0408 17.2524 17.8408 16.6278 17.98C16.0036 18.1189 15.0669 17.4931 14.8934 17.3539C14.7545 17.2494 12.2917 15.6841 11.4245 14.9191C11.1815 14.7102 10.9038 14.2929 11.4592 13.806L15.1017 10.3275C15.5179 9.90963 15.9342 8.93571 14.1997 10.1186L9.34288 13.4228C9.34288 13.4228 8.78777 13.7709 7.7473 13.4579L5.49213 12.762C5.49213 12.762 4.65962 12.2403 6.08196 11.7186C9.55117 10.0838 13.8182 8.41436 17.5992 6.84901"
        fill="#00C6B7"
      />
    </svg>
  );
};

export const LinkedinCircleIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ? className : ""}`}
    >
      <circle cx="12" cy="12" r="12" fill="white" />
      <path
        d="M6.9354 8.9884H9.26702V16.5H6.9354V8.9884ZM8.10185 5.25C8.36928 5.25 8.6307 5.32942 8.85304 5.47821C9.07538 5.62699 9.24865 5.83847 9.35093 6.08587C9.45321 6.33328 9.4799 6.6055 9.42764 6.8681C9.37537 7.1307 9.24649 7.37188 9.0573 7.56112C8.86811 7.75037 8.62712 7.87918 8.3648 7.93126C8.10248 7.98335 7.83063 7.95636 7.58363 7.85371C7.33663 7.75107 7.12559 7.57738 6.9772 7.35462C6.82881 7.13186 6.74975 6.87003 6.75 6.60227C6.75034 6.24351 6.89292 5.89955 7.1464 5.64599C7.39989 5.39243 7.74354 5.25 8.10185 5.25ZM10.7296 8.9884H12.9647V10.0197H12.9956C13.3071 9.42927 14.0667 8.80663 15.201 8.80663C17.5623 8.80148 18 10.3574 18 12.3749V16.5H15.6684V12.8454C15.6684 11.9752 15.6529 10.855 14.4569 10.855C13.2608 10.855 13.0574 11.8038 13.0574 12.7887V16.5H10.7296V8.9884Z"
        fill="#00C6B7"
      />
    </svg>
  );
};

export const CalendarIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ? className : ""}`}
    >
      <path
        d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 2.25V5.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 2.25V5.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.75 8.25H20.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ShareIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ? className : ""}`}
    >
      <path
        d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 21.75C18.1569 21.75 19.5 20.4069 19.5 18.75C19.5 17.0931 18.1569 15.75 16.5 15.75C14.8431 15.75 13.5 17.0931 13.5 18.75C13.5 20.4069 14.8431 21.75 16.5 21.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 8.25C18.1569 8.25 19.5 6.90685 19.5 5.25C19.5 3.59315 18.1569 2.25 16.5 2.25C14.8431 2.25 13.5 3.59315 13.5 5.25C13.5 6.90685 14.8431 8.25 16.5 8.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.977 6.87219L8.52344 10.378"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.52344 13.6219L13.977 17.1278"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const NavigationIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ? className : ""}`}
    >
      <path
        d="M19.5408 3.50513L3.6686 8.99935C3.51914 9.05108 3.38986 9.14875 3.29924 9.27838C3.20862 9.40801 3.1613 9.56297 3.16405 9.72111C3.1668 9.87926 3.21947 10.0325 3.31454 10.1589C3.40961 10.2853 3.5422 10.3784 3.69337 10.4249L10.8705 12.6333C10.9874 12.6692 11.0937 12.7333 11.1802 12.8198C11.2667 12.9063 11.3308 13.0126 11.3667 13.1295L13.5751 20.3066C13.6216 20.4578 13.7147 20.5904 13.8411 20.6855C13.9675 20.7805 14.1207 20.8332 14.2789 20.8359C14.437 20.8387 14.592 20.7914 14.7216 20.7008C14.8512 20.6101 14.9489 20.4809 15.0006 20.3314L20.4949 4.4592C20.5409 4.3262 20.5486 4.18292 20.517 4.04575C20.4855 3.90858 20.416 3.78306 20.3165 3.68354C20.2169 3.58401 20.0914 3.5145 19.9542 3.48295C19.8171 3.4514 19.6738 3.45909 19.5408 3.50513V3.50513Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const TimerIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ? className : ""}`}
    >
      <path
        d="M12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11.9999L15.7123 8.2876"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 0.75H14.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const GlobeIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ? className : ""}`}
    >
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.51251 9H20.4874"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.51287 15H20.4876"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20.7585C14.0711 20.7585 15.75 16.8372 15.75 12.0001C15.75 7.16297 14.0711 3.2417 12 3.2417C9.92893 3.2417 8.25 7.16297 8.25 12.0001C8.25 16.8372 9.92893 20.7585 12 20.7585Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const FacebookOutlinedIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ? className : ""}`}
    >
      <path
        d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 11H19C18.2044 11 17.4413 11.3161 16.8787 11.8787C16.3161 12.4413 16 13.2044 16 14V28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const TelegramOutlinedIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ? className : ""}`}
    >
      <path
        d="M11 16.8588L22.2397 26.7497C22.3697 26.8641 22.5272 26.9428 22.6969 26.9781C22.8665 27.0133 23.0423 27.0039 23.2072 26.9507C23.3721 26.8976 23.5203 26.8025 23.6374 26.6748C23.7544 26.5471 23.8363 26.3912 23.875 26.2224L28.5767 5.7058C28.6174 5.52841 28.6089 5.34329 28.5521 5.17039C28.4953 4.9975 28.3924 4.84337 28.2545 4.72463C28.1166 4.60588 27.9489 4.52702 27.7695 4.49655C27.5901 4.46607 27.4057 4.48513 27.2363 4.55167L4.16674 13.6147C3.96568 13.6937 3.79561 13.8357 3.68197 14.0194C3.56832 14.2031 3.51722 14.4187 3.53631 14.6338C3.55539 14.849 3.64364 15.0522 3.78784 15.213C3.93205 15.3739 4.12446 15.4837 4.33628 15.5261L11 16.8588Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 16.8592L28.014 4.57129"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6134 21.7987L12.7071 25.7049C12.5673 25.8448 12.3891 25.94 12.1951 25.9786C12.0011 26.0172 11.8 25.9974 11.6173 25.9217C11.4346 25.846 11.2784 25.7179 11.1685 25.5534C11.0587 25.389 11 25.1956 11 24.9978V16.8589"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const WhatsappOutlinedIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ? className : ""}`}
    >
      <path
        d="M5.67863 22.125C4.18771 19.6116 3.66558 16.6405 4.21027 13.7694C4.75497 10.8984 6.32903 8.32491 8.63688 6.53228C10.9447 4.73965 13.8276 3.85117 16.7442 4.03368C19.6607 4.21619 22.4104 5.45714 24.4767 7.52349C26.5431 9.58984 27.7841 12.3395 27.9666 15.256C28.1491 18.1726 27.2606 21.0555 25.468 23.3633C23.6754 25.6712 21.102 27.2453 18.2309 27.79C15.3598 28.3347 12.3887 27.8126 9.87535 26.3217L9.87538 26.3216L5.73081 27.5057C5.55933 27.5547 5.37788 27.557 5.20524 27.5122C5.03261 27.4675 4.87508 27.3774 4.74897 27.2513C4.62287 27.1252 4.53278 26.9677 4.48805 26.795C4.44332 26.6224 4.44556 26.4409 4.49456 26.2695L5.67872 22.1249L5.67863 22.125Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.0142 23C17.6986 23.0019 16.3956 22.7441 15.1797 22.2415C13.9639 21.7389 12.8592 21.0013 11.9289 20.0711C10.9987 19.1408 10.2611 18.0361 9.75849 16.8203C9.25589 15.6044 8.99814 14.3014 9.00001 12.9858C9.00299 12.0598 9.37314 11.1727 10.0293 10.5192C10.6854 9.86576 11.574 9.49921 12.5 9.5V9.5C12.6519 9.5 12.8011 9.54015 12.9325 9.61639C13.0638 9.69263 13.1727 9.80224 13.2481 9.93412L14.7094 12.4915C14.7976 12.6458 14.843 12.8207 14.8411 12.9983C14.8393 13.1759 14.7901 13.3498 14.6987 13.5022L13.5251 15.4582C14.1289 16.7982 15.2018 17.8711 16.5418 18.4749V18.4749L18.4978 17.3013C18.6502 17.2099 18.8241 17.1608 19.0017 17.1589C19.1793 17.157 19.3542 17.2024 19.5085 17.2906L22.0659 18.7519C22.1978 18.8273 22.3074 18.9362 22.3836 19.0675C22.4598 19.1989 22.5 19.3481 22.5 19.5V19.5C22.4974 20.425 22.1297 21.3115 21.477 21.9669C20.8242 22.6223 19.9392 22.9936 19.0142 23V23Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LinkedinOutlinedIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ? className : ""}`}
    >
      <path
        d="M26 5H6C5.44772 5 5 5.44772 5 6V26C5 26.5523 5.44772 27 6 27H26C26.5523 27 27 26.5523 27 26V6C27 5.44772 26.5523 5 26 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 14V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 14V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 17.5C15 16.5717 15.3687 15.6815 16.0251 15.0251C16.6815 14.3687 17.5717 14 18.5 14C19.4283 14 20.3185 14.3687 20.9749 15.0251C21.6313 15.6815 22 16.5717 22 17.5V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 11.25C11.6904 11.25 12.25 10.6904 12.25 10C12.25 9.30964 11.6904 8.75 11 8.75C10.3096 8.75 9.75 9.30964 9.75 10C9.75 10.6904 10.3096 11.25 11 11.25Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const InstagramOutlinedIcon = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ? className : ""}`}
    >
      <path
        d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 4.5H10.5C7.18629 4.5 4.5 7.18629 4.5 10.5V21.5C4.5 24.8137 7.18629 27.5 10.5 27.5H21.5C24.8137 27.5 27.5 24.8137 27.5 21.5V10.5C27.5 7.18629 24.8137 4.5 21.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 10.75C23.1904 10.75 23.75 10.1904 23.75 9.5C23.75 8.80964 23.1904 8.25 22.5 8.25C21.8096 8.25 21.25 8.80964 21.25 9.5C21.25 10.1904 21.8096 10.75 22.5 10.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const PlayCircleIcon = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      width="121"
      height="120"
      viewBox="0 0 121 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.5 120C93.6371 120 120.5 93.1371 120.5 60C120.5 26.8629 93.6371 0 60.5 0C27.3629 0 0.5 26.8629 0.5 60C0.5 93.1371 27.3629 120 60.5 120ZM51.5 75.5885L78.5 60L51.5 44.4115V75.5885Z"
        fill="currentColor"
      />
    </svg>
  );
};
