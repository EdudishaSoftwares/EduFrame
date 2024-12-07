// Main App
import App from "@/App";
// Modules
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CustomProvider } from "rsuite";
import { BrowserRouter } from "react-router-dom";
// Style
import "rsuite/dist/rsuite.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CustomProvider theme="light">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CustomProvider>
  </StrictMode>
);
