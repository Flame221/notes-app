import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MantineProvider } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MantineProvider
    withNormalizeCSS
    withGlobalStyles
    theme={{
      colorScheme: "dark",
      colors: {
        brand: [
          "#FFF5F5",
          "#FFE3E3",
          "#FFC9C9",
          "#FFA8A8",
          "#FF8787",
          "#FF6B6B",
          "#FA5252",
          "#F03E3E",
          "#E03131",
          "#C92A2A",
        ],
      },
      primaryColor: "brand",
    }}
  >
    <App />
  </MantineProvider>
);
