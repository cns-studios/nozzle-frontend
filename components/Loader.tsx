"use client";

import { useEffect, useState } from "react";

interface LoaderProps {
  ready: boolean;
}

function Loader({ ready }: LoaderProps) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!ready) return;
    const timer = setTimeout(() => setHidden(true), 800);
    return () => clearTimeout(timer);
  }, [ready]);

  if (hidden) return null;

  return (
    <div
      className={`loader-overlay${ready ? " fade-out" : ""}`}
      aria-hidden={ready}
    >
      <div className="loader-ring">
        <svg
          className="loader-logo"
          width="48"
          height="38"
          viewBox="0 0 48 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Nozzle logo"
        >
          <path
            d="M21.8361 27.4928L14.3607 37.7675C13.8171 38.3155 13.4546 37.7675 13.3414 37.425C12.8883 35.0276 11.9822 29.8903 11.9822 28.5203C11.9822 27.1504 10.17 27.2645 9.26392 27.4928C6.88539 28.4062 1.84557 30.2605 0.769166 30.5752C-0.0815464 30.824 -0.0815775 30.4815 0.0895856 30.2328L16.3995 20.3006C16.3995 20.3006 18.5741 19.0676 20.477 16.8757C22.3798 14.6838 20.1372 14.8207 18.778 15.1632L9.26392 18.9306C7.22517 16.0765 3.07971 10.2314 2.80787 9.68341C2.53604 9.13542 2.95491 8.90084 3.48745 8.99843C7.22515 9.68341 14.9044 11.1219 15.7199 11.3959C16.5354 11.6698 17.6454 10.5967 18.0984 10.0259C20.3637 6.9435 25.234 0.0937141 25.234 0.0937141C25.7418 -0.13876 26.0269 0.0937142 26.2534 0.436203C26.2534 1.46367 26.1175 4.13509 26.933 6.60101C27.7485 9.06693 29.7646 9.22676 30.6707 8.99843L48 3.17612L21.1566 18.9306C19.9654 19.7256 19.3217 20.6431 18.778 22.013C18.2344 23.383 19.6841 23.2688 20.477 23.0405L30.3309 18.9306C32.2564 21.5564 36.1753 27.0134 36.4471 27.8353C36.7189 28.6573 36.3339 28.8628 36.1073 28.8628C32.2564 28.1778 24.3506 26.8079 23.5351 26.8079C22.7196 26.8079 22.0627 27.2645 21.8361 27.4928Z"
            fill="white"
          />
        </svg>
      </div>
      <span className="loader-text">
        Loading
        <span className="loader-dots">
          <i />
          <i />
          <i />
        </span>
      </span>
    </div>
  );
}

export default Loader;
