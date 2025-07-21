import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./page/App";
import Context from "./utils/context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Airdrop from "./page/Airdrop";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/airdrop" element={<Airdrop />} />
        </Routes>
      </BrowserRouter>
    </Context>
  </StrictMode>
);
