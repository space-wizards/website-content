import { whenReady } from "./util.js";

function onLoaded() {
	setupVideoIntersectionObserver();
}

function setupVideoIntersectionObserver() {
	// We use IntersectionObserver to pause videos that are out of view.
	// Because at least Firefox is too stupid to do this itself, making performance on the website *awful*.
	if (!('IntersectionObserver' in window)) {
		// Intersection observers not available.
		return;
	}

	let observer = new IntersectionObserver(intersectionCallback)
	let videos = document.querySelectorAll("video");
	for (let i = 0; i < videos.length; i++) {
		let video = videos[i];
		if (video.paused && !video.autoplay) {
			video.attributes["was-paused"] = true;
		}

		observer.observe(video);
	}
}

function intersectionCallback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
	for (const entry of entries) {
		let element = <HTMLMediaElement>entry.target;
		if (entry.isIntersecting) {
			if (!element.attributes["was-paused"]) {
				element.play();
			}
		} else {
			if (element.paused && !element.autoplay) {
				element.attributes["was-paused"] = true;
			}
			element.pause();
		}
	}
}

whenReady(onLoaded);

// Make sure this is a module.
export {}
