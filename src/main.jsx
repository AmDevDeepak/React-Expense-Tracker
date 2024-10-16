import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "./Theme/Theme.js";
import { GlobalState } from "./Context/index.jsx";

createRoot(document.getElementById("root")).render(
  <GlobalState>
    <ChakraBaseProvider theme={theme}>
      <App />
    </ChakraBaseProvider>
  </GlobalState>
);
