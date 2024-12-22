import { memo } from "react";

const StartButtonIcon = memo(() => (
  <svg
    height="100%"
    viewBox="0 0 24 24"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#FFFFFF">
      {Array.from({ length: 3 }, (_, row) =>
        Array.from({ length: 3 }, (__, col) => (
          <circle
            key={`${row}-${col}`}
            cx={4 + col * 8}
            cy={4 + row * 8}
            r="2.5"
          />
        ))
      )}
    </g>
  </svg>
));

export default StartButtonIcon;
