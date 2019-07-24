// Update the random text below the logo.

/**
 * Picks a random element from an array.
 * @param array The array to pick from.
 */
function pick<T>(array: T[]): T {
	return array[Math.floor(Math.random() * array.length)];
}

function onLoaded() {
	document.getElementById("subname").innerHTML = pick([
		"Crashing SS13, with no survivors!",
		"Get dat fukken remake!",
		"Soon&trade;",
		"Beat up clowns in HD!",
		"Brought to you by <s>ROBUSTENGINE&trade;</s> <s>SFML</s> <s>Godot Game Engine</s> Clyde",
		"Suprisingly not dead!",
		"We're at it again!",
		"Now with 20% more space!",
		"Honking 24/7!"
	]) + "<br />";
}

if (document.readyState !== "loading") {
	onLoaded();
} else {
	document.addEventListener("DOMContentLoaded", onLoaded);
}
