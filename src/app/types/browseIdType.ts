type NavigationEndpoint = {
	browseEndpoint?: {
		browseId?: string;
	};
};

type Runs = {
	navigationEndpoint?: NavigationEndpoint;
};

type Title = {
	runs?: Runs[];
};

type VideoOwnerRenderer = {
	title?: Title;
};

export type browseIdType = {
	videoOwnerRenderer?: VideoOwnerRenderer;
	[key: string]: unknown;
};
