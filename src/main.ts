import { createAppController } from "./ui/appController";
import { registerServiceWorker } from "./pwa/registerServiceWorker";
import "./styles.css";

const appContainer = document.getElementById("app");

if (!appContainer) {
  throw new Error("App-Container nicht gefunden.");
}

createAppController(appContainer).init();
registerServiceWorker();
