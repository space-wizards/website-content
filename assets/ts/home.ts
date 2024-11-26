// @ts-ignore
import { createApp, reactive } from "./vue/petite-vue.es.js"
import { whenReady } from "./util.js";
import { getServerList, ServerStatusData, ServerStatusEntry } from "./hub_api.js";
import { fetchChangelog } from "./changelog.js";

// Code for the home page.

let SELECTED_GALLERY_IMG: HTMLImageElement;
let SELECTED_THUMB: HTMLImageElement;
let GALLERY_IMGS: { [id: string] : HTMLImageElement } = {};
let GALLERY_THUMBS: { [id: string] : HTMLImageElement } = {};

function setupGallery() {
	let imgs = document.querySelectorAll(".gallery-img");
	for (var i = 0; i < imgs.length; i++) {
		let img = <HTMLImageElement> imgs[i];
		let imgId = img.dataset.galleryId;
		// console.log(`img: ${i}: ${imgId}`);
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
		// console.log(`thumb ${i}: ${imgId}`);
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

function serverEntry(entry: ServerStatusEntry) {
	return {
		$template: "#server-entry-template",
		entry: entry,
		get statusData(): ServerStatusData {
			return entry.statusData;
		},
		get address(): string {
			return entry.address;
		},
		get roundStartedAgo(): string | null {
			if (entry.statusData.round_start_time == null) {
				return null;
			}

			let roundStart = Date.parse(entry.statusData.round_start_time);
			let now = Date.now();
			let diffMinutes = (now - roundStart) / 60_000;
			let diffFormatted = diffMinutes.toLocaleString("en-US", {maximumFractionDigits: 0});
			return `${diffFormatted} minute${diffFormatted == "1" ? "" : "s"}`;
		}
	}
}

const HomePageServerListSize = 5;
const HomePageLanguageTag = "lang:en"

function isServerListValid(server: ServerStatusEntry): boolean {
	let tags = server.inferredTags.concat(server.statusData.tags ?? [])

	for (let tag of tags) {
		if (tag.startsWith(HomePageLanguageTag))
			return true;
	}

	return false;
}

function shortServerList() {
	return {
		servers: [],
		loading: true,
		async mounted() {
			let servers = await getServerList();
			// Filter English servers, because the site itself is English.
			// Make this configurable in the future if we get a Russian translation.
			servers = servers.filter(isServerListValid);
			// Sort player count descending.
			servers.sort((a, b) => b.statusData.players - a.statusData.players);
			servers = servers.slice(0, HomePageServerListSize);

			this.servers = servers;
			this.loading = false;
		}
	}
}

function setupServerList() {
	createApp({
		serverEntry,
		shortServerList
	}).mount("#home-servers")
}

whenReady(() => {
	setupGallery();
	setupServerList();
	fetchChangelog();
});

export {}
