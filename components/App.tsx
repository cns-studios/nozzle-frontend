"use client";

import LandingPage from "./LandingPage";
import Silk from "./Silk";

function App() {
  return (
    <>
      <div className="silk-bg">
        <Silk speed={5} scale={1} color="#A855F7" noiseIntensity={1.5} rotation={0} />
      </div>
      <LandingPage />
    </>
  );
}

export default App;
