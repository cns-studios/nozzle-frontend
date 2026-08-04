import { useState } from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Silk from "./components/Silk";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <div className="silk-bg">
        <Silk speed={5} scale={1} color="#A855F7" noiseIntensity={1.5} rotation={0} />
      </div>
      {!loggedIn ? (
        <LandingPage onLogin={() => setLoggedIn(true)} />
      ) : (
        <main>
          <Header onAction={() => setLoggedIn(false)} />
        </main>
      )}
    </>
  );
}

export default App;
