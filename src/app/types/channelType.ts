export type ChannelType = {
	message: string;
	data: ChannelDataType | null;
	errors: undefined | string[];
};

export type ChannelDataType = {
	id: string;
	name: string;
	channelUrl: string;
	rssUrl: string;
};
