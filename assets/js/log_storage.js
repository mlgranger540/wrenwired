export function addToSessionStorage(item) {
    let array = getSessionStorage();
    array.push(item);
    sessionStorage.setItem("items", JSON.stringify(array));
    updateLogOnPage();
}

export function getSessionStorage() {
    return JSON.parse(sessionStorage.getItem("items"));
}

export function clearSessionStorage() {
    sessionStorage.removeItem("items");
    let list = "[]";
    log.innerHTML = list;
}

export function updateLogOnPage(){
    let logList = document.getElementById("log-list");
    let list = "<ul>";
    let logItems = getSessionStorage();
    if (logItems == undefined) {
        sessionStorage.setItem("items", JSON.stringify([]));
    } else {
        logItems.forEach((x)=>{
            list += `<li>${x}</li>`;
        })
    }
    list += "</ul>";
    logList.innerHTML = list;
}