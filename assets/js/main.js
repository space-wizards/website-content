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
    var observer = new IntersectionObserver(intersectionCallback);
    var videos = document.querySelectorAll("video");
    for (var i = 0; i < videos.length; i++) {
        var video = videos[i];
        if (video.paused && !video.autoplay) {
            video.attributes["was-paused"] = true;
        }
        observer.observe(video);
    }
}
function intersectionCallback(entries, observer) {
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var entry = entries_1[_i];
        var element = entry.target;
        if (entry.isIntersecting) {
            if (!element.attributes["was-paused"]) {
                element.play();
            }
        }
        else {
            if (element.paused && !element.autoplay) {
                element.attributes["was-paused"] = true;
            }
            element.pause();
        }
    }
}
if (document.readyState !== "loading") {
    onLoaded();
}
else {
    document.addEventListener("DOMContentLoaded", onLoaded);
}
