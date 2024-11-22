// noinspection CssInvalidHtmlTagReference

export async function fetchChangelog()
{
	const response = await fetch('https://moon.spacestation14.com/changelog.xml');
	if (!response.ok)
	{
		document.getElementById('changelog-reload-button').hidden = false;
		return;
	}

	const parser = new DOMParser();
	const changelog: XMLDocument = parser.parseFromString(await response.text(), 'text/xml');
	const versions = changelog.querySelectorAll('item');


	let outputHtml = "";

	for (const version of versions)
	{
		const date = new Date(Date.parse(version.querySelector('pubDate').innerHTML));
		const entries = Array.from(version.querySelectorAll('entry'))
			.map(entry => new ChangelogEntry(entry));

		const versionHtml = versionTemplate(date, entries)
		outputHtml = outputHtml.concat(versionHtml);
	}
	document.getElementById('changelog-output').innerHTML = outputHtml;
}

// Funny identity tag function for webstorm syntax highlighting in string templates
const html = (strings: any, ...values: any[]) => String.raw({ raw: strings }, ...values);

const versionTemplate = (date: Date, changes: ChangelogEntry[]) => html`
        <article class="changelog-version">
            <h3 class="version-date">${date.toLocaleDateString('en-EN', {})}</h3>
            ${changes.map(value => changelogTemplate(value)).join('')}
        </article>
    `;

const changelogTemplate = (change: ChangelogEntry) => html`
        <h4 class="change-author">${change.author}</h4>
        <ul class="version-changes">
        ${change.changes.map(entry => `<li class="version-change" data-type="${entry.type}">${entry.text}</li>`).join('')}
        </ul>`;

class ChangelogEntry
{
	private _changes = [];
	private readonly _author: string;

	/**
	 *
	 * @param entry
	 */
	constructor(entry: Element)
	{
		this._author = entry.querySelector('author').innerHTML;
		const xmlChanges = entry.querySelectorAll('change')

		for (const change of xmlChanges)
		{
			this._changes.push({
				type: change.getAttribute('ss14:type'),
				text: change.innerHTML
			});
		}
	}

	get author(): string
	{
		return this._author;
	}

	get changes(): any[]
	{
		return this._changes;
	}

}
