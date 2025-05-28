import React from "react";

export default function FAQICON({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="26"
      height="21"
      viewBox="0 0 26 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      {...props}
    >
      <path
        d="M12.6667 3.49999C12.6667 3.49999 10.9167 1.16666 6.83333 1.16666C2.75 1.16666 1 3.49999 1 3.49999V19.8333C1 19.8333 2.75 18.6667 6.83333 18.6667C10.9167 18.6667 12.6667 19.8333 12.6667 19.8333M12.6667 3.49999V19.8333M12.6667 3.49999C12.6667 3.49999 14.4167 1.16666 18.5 1.16666C22.5833 1.16666 24.3333 3.49999 24.3333 3.49999V19.8333C24.3333 19.8333 22.5833 18.6667 18.5 18.6667C14.4167 18.6667 12.6667 19.8333 12.6667 19.8333"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
