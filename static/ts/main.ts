// Update the random text below the logo.

/**
 * Picks a random element from an array.
 * @param array The array to pick from.
 */
function pick<T>(array: Array<T>): T {
	return array[Math.floor(Math.random() * array.length)];
}

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("subname").innerHTML = pick([
		"Crashing SS13, with no survivors!",
		"Get dat fukken remake!",
		"Soon&trade;"
	]) + "<br />";
});

