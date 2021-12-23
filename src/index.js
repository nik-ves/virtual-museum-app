import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import AuthContextProvider from "./context/auth-context";
import SettingsContextProvider from "./context/settings-context";
import ToursContextProvider from "./context/tours-context";

ReactDOM.render(
  <ToursContextProvider>
    <SettingsContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContextProvider>
    </SettingsContextProvider>
  </ToursContextProvider>,
  document.getElementById("root")
);
