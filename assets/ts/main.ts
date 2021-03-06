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
	setupGallery();
}

let SELECTED_GALLERY_IMG: HTMLImageElement;
let SELECTED_THUMB: HTMLImageElement;
let GALLERY_IMGS: { [id: string] : HTMLImageElement } = {};
let GALLERY_THUMBS: { [id: string] : HTMLImageElement } = {};

function setupGallery() {
	let imgs = document.querySelectorAll(".gallery-img");
	for (var i = 0; i < imgs.length; i++) {
		let img = <HTMLImageElement> imgs[i];
		let imgId = img.dataset.galleryId;
		console.log(`img: ${i}: ${imgId}`);
		GALLERY_IMGS[imgId] = img;

		if (img.classList.contains("active"))
		{
			SELECTED_GALLERY_IMG = img;
		}
	}

	let thumbs = document.querySelectorAll(".gallery-thumb");
	for (var i = 0; i < thumbs.length; i++) {
		let thumb = <HTMLImageElement> thumbs[i];
		let imgId = thumb.dataset.galleryId;
		console.log(`thumb ${i}: ${imgId}`);
		GALLERY_THUMBS[imgId] = thumb;

		if (GALLERY_IMGS[imgId] == SELECTED_GALLERY_IMG)
		{
			thumb.classList.add("active");
			SELECTED_THUMB = thumb;
		}

		thumb.addEventListener("click", event => {
			switchToImage(imgId);
		});
	}
}

function switchToImage(imgId: string) {
	let selected = SELECTED_GALLERY_IMG;
	let selectedThumb = SELECTED_THUMB;
	let newSelected = GALLERY_IMGS[imgId];
	let newSelectedThumb = GALLERY_THUMBS[imgId];

	selected.classList.remove("active");
	newSelected.classList.add("active");

	selectedThumb.classList.remove("active");
	newSelectedThumb.classList.add("active");

	SELECTED_GALLERY_IMG = newSelected;
	SELECTED_THUMB = newSelectedThumb;
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
