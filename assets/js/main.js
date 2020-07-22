"use strict";
function pick(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function onLoaded() {
    setupVideoIntersectionObserver();
}
if (document.readyState !== "loading") {
    onLoaded();
}
else {
    document.addEventListener("DOMContentLoaded", onLoaded);
}
function setupVideoIntersectionObserver() {
    if (!('IntersectionObserver' in window)) {
        return;
    }
    var observer = new IntersectionObserver(intersectionCallback, {});
    document.querySelectorAll("video").forEach(function (v) {
        v.pause();
        observer.observe(v);
    });
}
function intersectionCallback(entries, observer) {
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var entry = entries_1[_i];
        var element = entry.target;
        if (entry.isIntersecting)
            element.play();
        else
            element.pause();
    }
}
if (document.readyState !== "loading") {
    onLoaded();
}
else {
    document.addEventListener("DOMContentLoaded", onLoaded);
}
