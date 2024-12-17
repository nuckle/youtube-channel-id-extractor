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

export type browseIdOldType = {
	videoOwnerRenderer?: VideoOwnerRenderer;
	[key: string]: unknown;
};
