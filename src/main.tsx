import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App";
import { CredentialProvider } from "./context/CredentialProvider";
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CredentialProvider>
      <App />
    </CredentialProvider>
  </StrictMode>,
)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register(
        "/service-worker.js"
      );

      console.log(
        "Service Worker registered:",
        registration.scope
      );
    } catch (error) {
      console.error(
        "Service Worker registration failed:",
        error
      );
    }
  });
}
