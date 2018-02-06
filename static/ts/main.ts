// Update the random text below the logo.

function isDoNotTrack(): boolean {
	if (!navigator.doNotTrack) {
		return false;
	}

	return navigator.doNotTrack === "1" || navigator.doNotTrack === "yes";
}

/**
 * Picks a random element from an array.
 * @param array The array to pick from.
 */
function pick<T>(array: T[]): T {
	return array[Math.floor(Math.random() * array.length)];
}

function initgtag() {
	window.dataLayer = window.dataLayer || [];
	gtag('js', new Date());
	gtag('config', 'UA-113656108-1');

	var s = document.createElement("script");
	s.src = "https://www.googletagmanager.com/gtag/js?id=UA-113656108-1";
	s.async = true;
	document.head.appendChild(s);
}

function gtag(...args: any[]) {
	window.dataLayer.push(arguments);
}

interface Window {
	dataLayer: any[];
}

document.addEventListener("DOMContentLoaded", () => {
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
		// Add Google analytics ONLY if DNT is disabled.
		// Respect user's choice please.
		initgtag();
	}
});
