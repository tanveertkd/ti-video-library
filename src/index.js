import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./context/video-listing-context";
import { AuthProvider, LikeProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <LikeProvider>
          <VideoProvider>
            <App />
          </VideoProvider>
        </LikeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
