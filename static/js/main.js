"use strict";
function pick(array) {
    return array[Math.floor(Math.random() * array.length)];
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("subname").innerHTML = pick([
        "Crashing SS13, with no survivors!",
        "Get dat fukken remake!",
        "Soon&trade;",
        "Beat up clowns in HD!",
        "Brought to you by <s>ROBUSTENGINE&trade;</s>SFML",
        "Suprisingly not dead!",
        "We're at it again!",
        "Now with 20% more space!",
        "Honking 24/7!"
    ]) + "<br />";
});
