'use server';

import { ChannelDataType } from '../types/channelType';
import {
	customFetch,
	extractChannelIdFromHtml,
	extractChannelNameFromHtml,
	extractHtml,
} from './helpers';
import { generateChannelUrl } from './utils';

import { logger } from '@/app/lib/logger';

const log = logger.child({ module: 'parser' });

export async function fetchChannelData(url: string): Promise<ChannelDataType> {
	try {
		const response = await customFetch(url);

		if (!response) {
			throw new Error('No initial response');
		}

		log.debug(`Fetched HTML from ${url}`);
		const html = await extractHtml(response);
		const id = await extractChannelIdFromHtml(html);
		const channelUrl = generateChannelUrl(id);
		const name = await extractChannelNameFromHtml(html, channelUrl);

		return {
			channelId: id,
			name: name,
		};
	} catch (error) {
		log.error(error);
		throw new Error(`Failed to process the URL: ${error}`);
	}
}
