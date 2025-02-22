// serviceWorkerRegistration.js
const register = () => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => console.log("SW registrado: ", registration))
          .catch((error) => console.error("SW falló: ", error));
      });
    }
  };
  
  export { register };
  