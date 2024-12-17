'use server';

import { ChannelDataType } from '../types/channelType';
import {
	customFetch,
	extractChannelIdFromHtml,
	extractChannelNameFromHtml,
	extractHtml,
	generateChannelUrl,
	generateRsslUrl,
} from './helpers';

export async function fetchChannelData(url: string): Promise<ChannelDataType> {
	try {
		const response = await customFetch(url);

		if (!response) {
			throw new Error('No initial response');
		}

		const html = await extractHtml(response);
		const id = await extractChannelIdFromHtml(html);
		const channelUrl = generateChannelUrl(id);
		const name = await extractChannelNameFromHtml(html, channelUrl);

		const rssUrl = generateRsslUrl(id);

		return {
			id: id,
			channelUrl: channelUrl,
			rssUrl: rssUrl,
			name: name,
		};
	} catch (error) {
		throw new Error(`Failed to process the URL: ${error}`);
	}
}
