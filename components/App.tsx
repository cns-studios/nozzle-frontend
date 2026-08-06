"use client";

import { useCallback, useEffect, useState } from "react";
import LandingPage from "./LandingPage";
import Silk from "./Silk";
import Loader from "./Loader";

function App() {
  const [ready, setReady] = useState(false);

  const handleReady = useCallback(() => setReady(true), []);

  useEffect(() => {
    const fallback = setTimeout(() => setReady(true), 6000);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <>
      <div className="silk-bg">
        <Silk
          speed={5}
          scale={1}
          color="#A855F7"
          noiseIntensity={1.5}
          rotation={0}
          onReady={handleReady}
        />
      </div>
      <Loader ready={ready} />
      <LandingPage />
    </>
  );
}

export default App;
