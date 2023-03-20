import {clearSessionStorage} from "./session_storage.js";

/**
 * Start over button reloads game on click
 */
window.reloadGame = function() {
    clearSessionStorage();
    window.location.replace("index.html");
}