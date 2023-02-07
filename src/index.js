import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>
);
