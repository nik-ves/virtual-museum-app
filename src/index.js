import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import AuthContextProvider from "./context/auth-context";
import SettingsContextProvider from "./context/settings-context";

ReactDOM.render(
  <SettingsContextProvider>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </SettingsContextProvider>,
  document.getElementById("root")
);
