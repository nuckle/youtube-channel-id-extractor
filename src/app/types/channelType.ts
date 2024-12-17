export type ChannelType = {
	message: string;
	data: {
		id: string;
		channelUrl: string;
	} | null;
	errors: undefined | string[];
};
