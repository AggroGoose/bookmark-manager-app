export default function IconMenuHamburger({
  className,
}: {
  className: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      className={className}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.6"
        d="M2.5 10h15m-15-5h15m-15 10h15"
      />
    </svg>
  );
}
