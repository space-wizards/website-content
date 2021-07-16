"use strict";
function pick(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function onLoaded() {
    setupVideoIntersectionObserver();
    setupGallery();
}
var SELECTED_GALLERY_IMG;
var SELECTED_THUMB;
var GALLERY_IMGS = {};
var GALLERY_THUMBS = {};
function setupGallery() {
    var imgs = document.querySelectorAll(".gallery-img");
    for (var i = 0; i < imgs.length; i++) {
        var img = imgs[i];
        var imgId = img.dataset.galleryId;
        console.log("img: " + i + ": " + imgId);
        GALLERY_IMGS[imgId] = img;
        if (img.classList.contains("active")) {
            SELECTED_GALLERY_IMG = img;
        }
    }
    var thumbs = document.querySelectorAll(".gallery-thumb");
    var _loop_1 = function () {
        var thumb = thumbs[i];
        var imgId = thumb.dataset.galleryId;
        console.log("thumb " + i + ": " + imgId);
        GALLERY_THUMBS[imgId] = thumb;
        if (GALLERY_IMGS[imgId] == SELECTED_GALLERY_IMG) {
            thumb.classList.add("active");
            SELECTED_THUMB = thumb;
        }
        thumb.addEventListener("click", function (event) {
            switchToImage(imgId);
        });
    };
    for (var i = 0; i < thumbs.length; i++) {
        _loop_1();
    }
}
function switchToImage(imgId) {
    var selected = SELECTED_GALLERY_IMG;
    var selectedThumb = SELECTED_THUMB;
    var newSelected = GALLERY_IMGS[imgId];
    var newSelectedThumb = GALLERY_THUMBS[imgId];
    selected.classList.remove("active");
    newSelected.classList.add("active");
    selectedThumb.classList.remove("active");
    newSelectedThumb.classList.add("active");
    SELECTED_GALLERY_IMG = newSelected;
    SELECTED_THUMB = newSelectedThumb;
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
