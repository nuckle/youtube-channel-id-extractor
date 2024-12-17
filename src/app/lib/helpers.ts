import 'server-only';

import * as cheerio from 'cheerio';
import { HeaderGenerator } from 'header-generator';

type Headers = Record<string, string>;
export function getHeaders(headers = {}): Headers {
	const headerGenerator = new HeaderGenerator({
		browsers: [
			{ name: 'firefox', minVersion: 95 },
			{ name: 'chrome', minVersion: 114 },
			{ name: 'edge', minVersion: 114 },
			'safari',
		],
		devices: ['desktop', 'mobile'],
		operatingSystems: ['windows', 'macos'],
		locales: ['en-US', 'en'],
	});

	return Object.assign(headers, headerGenerator.getHeaders());
}

export async function extractChannelIdFromHtml(html: string): Promise<string> {
	try {
		try {
			const rssHref = extractRssHrefFromHtml(html);
			return extractChannelIdFromChannelHref(rssHref);
		} catch {
			const id = await extractIdFromHtmlJson(html);

			if (!id) throw new Error('Channel ID not found in HTML');
			return id;
		}
	} catch (error) {
		throw new Error(
			`An error occurred while extracting channel ID from HTML: ${error}`,
		);
	}
}

export async function extractChannelNameFromHtml(html: string):Promise<string | undefined> {
	const $ = cheerio.load(html);

	const linkElement = $('link[itemprop="name"]');
	const name = linkElement.attr('content');

	return name;
}

async function extractIdFromHtmlJson(html: string): Promise<string | null> {
	const $ = cheerio.load(html);
	let channelId: string | null = null;

	$('script').each((_, element) => {
		const scriptContent = $(element).html();
		if (scriptContent && scriptContent.includes('webCommandMetadata')) {
			const match = scriptContent.match(
				/"url":"\/channel\/(UC[a-zA-Z0-9_-]{22})"/,
			);
			if (match) {
				channelId = match[1];
				return false;
			}
		}
	});

	return channelId;
}

export async function extractHtml(response: Response): Promise<string> {
	const text = await response.text();

	return text;
}

export function extractRssHrefFromHtml(html: string):string {
	try {
		const $ = cheerio.load(html);

		const linkElement = $('link[rel="alternate"][type="application/rss+xml"]');
		const href = linkElement.attr('href');

		if (!href) throw new Error('Href was not found in RSS');

		return href;
	} catch (error) {
		throw new Error(
			`An error happened during RSS href extraction from Html: ${error}`,
		);
	}
}

export function generateChannelUrl(id: string):string {
	const baseUrl = 'https://www.youtube.com/channel';
	return `${baseUrl}/${id}`;
}

export function generateRsslUrl(id: string):string {
	const baseUrl = 'https://www.youtube.com/feeds/videos.xml?channel_id';
	return `${baseUrl}=${id}`;
}

export function extractChannelIdFromChannelHref(href: string):string {
	try {
		const url = new URL(href);
		const searchParams = url.searchParams;
		const channelId = searchParams.get('channel_id');

		if (!channelId) throw new Error('Channel Id was not found in RSS href');

		return channelId;
	} catch (error) {
		throw new Error(
			`An error happened during channel id extraction from RSS href: ${error}`,
		);
	}
}

export async function customFetch(
	url: string,
	headers: Record<string, string> = {},
): Promise<Response> {
	const maxRetries = 4;

	for (let attempt = 1; attempt <= maxRetries; attempt++) {
		try {
			const response = await fetch(url, {
				method: 'GET',
				headers: getHeaders(headers),
			});

			if (!response.ok) {
				throw new Error(`Failed to access the host. Status: ${response.status}`);
			}

			return response;
		} catch (e: unknown) {
			if (attempt === maxRetries) {
				if (typeof e === 'string') {
					throw new Error(`Max retries reached. ${e}`);
				} else if (e instanceof Error) {
					throw new Error(`Max retries reached. ${e.message}`);
				} else {
					throw new Error('Max retries reached. Unknown error.');
				}
			}

			const delayMs = Math.pow(2, attempt) * 1000;
			await delay(delayMs);
		}
	}

	throw new Error('Max retries reached. Request failed without a response.');
}

export const delay = (ms: number) => {
	return new Promise(function (resolve) {
		setTimeout(resolve, ms);
	});
};
