import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";

// Import your publishable key
<<<<<<< HEAD
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
=======
const PUBLISHABLE_KEY = 'pk_test_YWxpdmUtb2NlbG90LTg3LmNsZXJrLmFjY291bnRzLmRldiQ'
>>>>>>> 189c3527600b11ee966f9f40e12e7969c3a849b8

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
//pk_test_TYooMQauvdEDq54NiTphI7jx
