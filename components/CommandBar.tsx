"use client";

import { useEffect, useState } from "react";

const PREVIEWS = [
  "implement the logo images/logo.png across the entire service",
  "review the open PRs and fix the failing CI tests",
  "add a dark mode toggle to the settings page",
  "refactor the auth middleware and add unit tests",
  "update the README with setup instructions",
];

const LOGO = "@nozzle";
const TYPE_MIN = 30;
const TYPE_VAR = 40;
const DELETE_DELAY = 20;
const HOLD_FULL = 2600;
const HOLD_LOGO = 800;

function CommandBar() {
  const [text, setText] = useState(LOGO);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(`${LOGO} ${PREVIEWS[0]}`);
      return;
    }

    let previewIdx = 0;
    let pos = LOGO.length;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const target = `${LOGO} ${PREVIEWS[previewIdx]}`;
      let delay: number;

      if (!deleting) {
        pos += 1;
        if (pos >= target.length) {
          deleting = true;
          delay = HOLD_FULL;
        } else {
          delay = TYPE_MIN + Math.random() * TYPE_VAR;
        }
      } else {
        pos -= 1;
        if (pos <= LOGO.length) {
          pos = LOGO.length;
          previewIdx = (previewIdx + 1) % PREVIEWS.length;
          deleting = false;
          delay = HOLD_LOGO;
        } else {
          delay = DELETE_DELAY;
        }
      }

      setText(target.slice(0, pos));
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, HOLD_LOGO);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="command-bar">
      <span className="command-text">
        {text}
        <span className="command-caret" aria-hidden="true" />
      </span>
      <svg
        className="command-send"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.0003 12C22.0003 12.0947 21.9734 12.1875 21.9227 12.2675C21.872 12.3475 21.7996 12.4115 21.714 12.452L3.71402 20.952C3.62412 20.9956 3.52318 21.0111 3.42434 20.9966C3.32549 20.982 3.2333 20.9381 3.15974 20.8705C3.08619 20.8028 3.03468 20.7147 3.0119 20.6174C2.98913 20.5201 2.99614 20.4182 3.03202 20.325L5.87402 12.698C6.0417 12.2477 6.0417 11.7522 5.87402 11.302L3.03102 3.67498C2.99495 3.58162 2.98785 3.47956 3.01064 3.3821C3.03343 3.28464 3.08505 3.19632 3.15878 3.12864C3.23251 3.06096 3.32492 3.01706 3.42396 3.00267C3.523 2.98828 3.62409 3.00407 3.71402 3.04798L21.714 11.548C21.7996 11.5885 21.872 11.6525 21.9227 11.7325C21.9734 11.8125 22.0003 11.9053 22.0003 12ZM22.0003 12H6.00002"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default CommandBar;
