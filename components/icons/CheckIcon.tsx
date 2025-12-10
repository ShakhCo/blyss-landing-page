export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9.5" cy="9.5" r="9.5" fill="#3ED37A" />
      <path
        d="M5.5 9.5L8.5 12.5L13.5 6.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
