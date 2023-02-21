let swLocation = "serviceWorker.js";

if(navigator.serviceWorker){
    if(window.location.href.includes("localhost"))
    swLocation = "/serviceWorker.js";
    navigator.serviceWorker.register(swLocation);
}