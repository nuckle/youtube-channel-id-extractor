export type ChannelType = {
	message: string;
	data: ChannelDataType | null;
	errors: undefined | string[];
};

export type ChannelDataType = {
	id: string;
	channelUrl: string;
};
