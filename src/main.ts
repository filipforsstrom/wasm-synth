import "./style.css";
import init, { greet } from "../wasm/pkg";

init().then(() => {
  greet();
});
