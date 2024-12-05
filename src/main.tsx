import "rsuite/dist/rsuite.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CustomProvider } from "rsuite";
import App from "@/App";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomProvider theme='light'>
      <App />
    </CustomProvider>
  </StrictMode>,
)
