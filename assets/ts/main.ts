// Update the random text below the logo.

/**
 * Picks a random element from an array.
 * @param array The array to pick from.
 */
function pick<T>(array: T[]): T {
	return array[Math.floor(Math.random() * array.length)];
}

function onLoaded() {
	/* 	document.getElementById("subname").innerHTML = pick([
			"Crashing SS13, with no survivors!",
			"Get dat fukken remake!",
			"Soon&trade;",
			"Beat up clowns in HD!",
			"Brought to you by <s>ROBUSTENGINE&trade;</s> <s>SFML</s> <s>Godot Game Engine</s> Clyde",
			"Suprisingly not dead!",
			"We're at it again!",
			"Now with 20% more space!",
			"Honking 24/7!"
		]) + "<br />"; */

	setupVideoIntersectionObserver();
}

if (document.readyState !== "loading") {
	onLoaded();
} else {
	document.addEventListener("DOMContentLoaded", onLoaded);
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
		video.pause();
		observer.observe(video);
	}
}

function intersectionCallback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
	for (const entry of entries) {
		let element = <HTMLMediaElement>entry.target;
		if (entry.isIntersecting)
			element.play();
		else
			element.pause();
	}
}

if (document.readyState !== "loading") {
	onLoaded();
} else {
	document.addEventListener("DOMContentLoaded", onLoaded);
}
