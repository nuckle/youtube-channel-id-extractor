'use server';

import { ChannelDataType } from '../types/channelType';
import {
    customFetch,
    extractChannelIdFromChannelHref,
    extractHtml,
    extractRssHrefFromHtml,
    generateChannelUrl,
    generateRsslUrl,
} from './helpers';

export async function fetchChannelData(url: string): Promise<ChannelDataType> {
	try {
		const response = await customFetch(url);

		if (!response) {
			throw new Error('No initial response');
		}

		if (!response.ok) throw new Error('Invalid response code from the server');

		const html = await extractHtml(response);
		const href = extractRssHrefFromHtml(html);

		const id = extractChannelIdFromChannelHref(href);
		const channelUrl = generateChannelUrl(id);
		const rssUrl = generateRsslUrl(id);

		return {
			id: id,
			channelUrl: channelUrl,
			rssUrl: rssUrl,
		};
	} catch (error) {
		throw new Error('Failed to process the URL');
	}
}
