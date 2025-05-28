import React from "react";

export default function FacebookIcon({
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="11"
      height="20"
      viewBox="0 0 11 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      {...props}
    >
      <path
        d="M2.53125 19.5H6.53125V11.49H10.1353L10.5313 7.51H6.53125V5.5C6.53125 5.23478 6.63661 4.98043 6.82415 4.79289C7.01168 4.60536 7.26604 4.5 7.53125 4.5H10.5313V0.5H7.53125C6.20517 0.5 4.9334 1.02678 3.99572 1.96447C3.05804 2.90215 2.53125 4.17392 2.53125 5.5V7.51H0.531254L0.135254 11.49H2.53125V19.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
