export function addLogItemToStorage(item) {
    let array = getSessionStorage();
    array.push(item);
    sessionStorage.setItem("items", JSON.stringify(array));
    updateLogOnPage();
}

export function addNameToStorage(item) {
    let array = getSessionStorage();
    array.push(item);
    sessionStorage.setItem("name", JSON.stringify(array));
}

function getSessionStorage() {
    return JSON.parse(sessionStorage.getItem("items"));
}

function getStoredName() {
    return JSON.parse(sessionStorage.getItem("name"));
}

export function clearSessionStorage() {
    sessionStorage.removeItem("items");
    let list = "[]";
    let logList = document.getElementById("log-list");
    logList.innerHTML = list;
}

export function updateLogOnPage() {
    let logList = document.getElementById("log-list");
    let list = "<ul>";
    let logItems = getSessionStorage();
    let storedName = getStoredName();
    if (logItems == undefined) {
        sessionStorage.setItem("items", JSON.stringify([]));
    } else {
        logItems.forEach((x)=>{
            list += `<li>` + storedName + `${x}</li>`;
        })
    }
    list += "</ul>";
    logList.innerHTML = list;
}