import React, { StrictMode } from "react";
//import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
//import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
