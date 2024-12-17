type browseEndpointType = {
	browseEndpoint?: {
		browseId?: string;
	};
};

type channelNavigationType = {
	channelNavigationEndpoint?: browseEndpointType;
};

export type browseIdType = {
	videoDescriptionHeaderRenderer?: channelNavigationType;
	[key: string]: unknown;
};
