export const TalkToUs = () => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="group pl-3 pr-2 py-2 relative inline-flex items-center text-sm font-medium"
      href="https://www.coincover.com/contact"
    >
      <span className="absolute inset-0 bg-primary-dark rounded-xl group-hover:opacity-[0.9]"></span>
      <div className="z-10 gap-1 flex items-center">
        <span className="text-white">Talk to us</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="size-3 shrink-0 text-white/90"
        >
          <path
            d="M6.5 2.75L12.75 9L6.5 15.25"
            stroke="currentColor"
            width="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </a>
  );
};
