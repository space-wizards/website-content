import { ensureOk } from "./util.js";
const HubApiUrl = "https://central.spacestation14.io/hub/";
// const HubApiUrl = "http://localhost:21953/";

export type ServerStatusData = {
	name: string,
	players: number,
	tags?: string[],
	round_start_time?: string
}

export type ServerStatusEntry = {
	address: string,
	statusData: ServerStatusData,
	inferredTags: string[]
}

export async function getServerList(): Promise<ServerStatusEntry[]> {
	let response = await fetch(`${HubApiUrl}api/servers`);
	ensureOk(response);

	let data = await response.json();

	return data;
}
