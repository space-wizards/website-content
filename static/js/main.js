"use strict";
function pick(array) {
    return array[Math.floor(Math.random() * array.length)];
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("subname").innerHTML = pick([
        "Crashing SS13, with no survivors!",
        "Get dat fukken remake!",
        "Soon&trade;"
    ]) + "<br />";
});
