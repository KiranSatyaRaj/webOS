import { memo } from "react";

const StartButtonIcon = memo(() => (
  <svg
    height="100%"
    viewBox="0 0 48 48"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#FFFFFF" transform="scale(2)">
      {Array.from({ length: 3 }, (_, row) =>
        Array.from({ length: 3 }, (__, col) => (
          <circle
            key={`${row}-${col}`}
            cx={6 + col * 8}
            cy={6 + row * 8}
            r="2.5"
          />
        ))
      )}
    </g>
  </svg>
));

export default StartButtonIcon;
