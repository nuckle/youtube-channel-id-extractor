'use server';

import { fetchChannelData } from '@/app/lib/parser';
import { urlSchema } from '@/app/lib/schemas';
import { ChannelType } from '@/app/types/channelType';

export async function fetchChannelAction(
	state: ChannelType,
	formData: FormData,
): Promise<ChannelType> {
	try {
		const url = formData.get('channel_url') as string;
		const result = urlSchema.safeParse({ url });

		if (result.success) {
			const data = await fetchChannelData(url);
			return { message: '', data: data ?? null, errors: undefined };
		} else {
			const errorMessage = result.error.issues[0].message;
			const errors = result.error.issues.map((issue) => issue.message);

			return { message: errorMessage, data: null, errors: errors };
		}
	} catch (error) {
		if (typeof error === 'string') {
			return {
				message: 'Failed to process the URL',
				data: null,
				errors: [error],
			};
		}
		return {
			message: 'Failed to process the URL',
			data: null,
			errors: ['Unexpected error'],
		};
	}
}
