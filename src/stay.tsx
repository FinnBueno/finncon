import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyle } from "./global-styles.ts";
import { VerblijfPage } from "./VerblijfPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <VerblijfPage />
  </StrictMode>,
);
