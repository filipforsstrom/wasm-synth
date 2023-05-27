import "./style.css";
import init, { beep, Handle } from "../wasm/pkg";

init()
  .then(() => {
    let handle: Handle | null = null;
    const playButton = document.getElementById("play")!;
    playButton.addEventListener("click", () => {
      handle = beep();
    });
    const stopButton = document.getElementById("stop")!;
    stopButton.addEventListener("click", () => {
      if (handle !== null) {
        handle.free();
        handle = null;
      }
    });
  })
  .catch(console.error);
