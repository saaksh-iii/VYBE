import "./tokens.css";
import { useState } from "react";
import VibeSelect from "./VibeSelect";
import Upload from "./Upload";
import PoseStudio from "./PoseStudio";
import YourBoard from "./YourBoard";

function App() {
  const [screen, setScreen] = useState("vibe");

  return (
    <div>
      <nav>
        <h2>VYBE ●</h2>
        <button onClick={() => setScreen("vibe")}>Vibe</button>
        <button onClick={() => setScreen("upload")}>Upload</button>
        <button onClick={() => setScreen("pose")}>Pose Studio</button>
        <button onClick={() => setScreen("board")}>Your Board</button>
      </nav>

      {screen==="vibe" && <VibeSelect />}
      {screen==="upload" && <Upload />}
      {screen==="pose" && <PoseStudio />}
      {screen==="board" && <YourBoard />}
    </div>
  );
}

export default App;
