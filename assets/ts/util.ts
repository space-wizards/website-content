export function whenReady(ready: () => void) {
	if (document.readyState !== "loading") {
		ready()
	} else {
		document.addEventListener("DOMContentLoaded", ready);
	}
}

export function ensureOk(response: Response) {
	if (!response.ok) {
		throw new Error("Response was not ok!");
	}
}
