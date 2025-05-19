import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
  // </StrictMode>,
);
