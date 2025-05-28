import React from "react";

export default function TwitterIcon({
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="23"
      height="22"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      {...props}
    >
      <mask
        id="mask0_430_512"
        // style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="23"
        height="22"
      >
        <path d="M0.333496 0H22.3335V22H0.333496V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_430_512)">
        <path
          d="M17.6585 1.03085H21.0324L13.6624 9.47571L22.3335 20.9691H15.5449L10.2241 13.9999L4.14264 20.9691H0.765639L8.64792 11.9334L0.333496 1.03242H7.29492L12.0972 7.40142L17.6585 1.03085ZM16.4721 18.9451H18.3421L6.2735 2.94957H4.26835L16.4721 18.9451Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
