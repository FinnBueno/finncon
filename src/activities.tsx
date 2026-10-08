import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyle } from "./global-styles.ts";
import { ActiviteitenPage } from "./ActiviteitenPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <ActiviteitenPage />
  </StrictMode>,
);
