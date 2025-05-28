import React from "react";

export default function EmailIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      {...props}
    >
      <path
        d="M20.9168 0.583344L1.0835 7.00001L8.66683 10.5L16.8335 4.66668L11.0002 12.8333L14.5002 20.4167L20.9168 0.583344Z"
        stroke="#0991FF"
        stroke-width="1.16667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
