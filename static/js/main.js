"use strict";
function isDoNotTrack() {
    if (!navigator.doNotTrack) {
        return false;
    }
    return navigator.doNotTrack === "1" || navigator.doNotTrack === "yes";
}
function pick(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function initgtag() {
    var s = document.createElement("script");
    s.src = "https://www.googletagmanager.com/gtag/js?id=UA-113656108-1";
    s.async = true;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    gtag('js', new Date());
    gtag('config', 'UA-113656108-1');
}
function gtag() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    window.dataLayer.push(args);
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
        "Honking 24/7!",
        "Waiting for Godot"
    ]) + "<br />";
    if (!isDoNotTrack()) {
        initgtag();
    }
});
