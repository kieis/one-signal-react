import { useEffect } from "react";
import "./App.css";
import runOneSignal from "./lib/onesignal";

function App() {
  useEffect(() => {
    runOneSignal();
  }, []);

  return (
    <>
      <p>one signal</p>
    </>
  );
}

export default App;
