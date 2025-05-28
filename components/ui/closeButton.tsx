"use client";

const CloseButton = ({ onClose }: { onClose: () => void }) => {
  return (
    <button
      onClick={onClose}
      className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-black bg-transparent text-black transition-colors hover:bg-black hover:text-white"
      aria-label="Close modal"
    >
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default CloseButton;
