export const determineFederationRemotesEndpoint = (localConfig: URL) => {
	if (document.location.href.startsWith("https://localhost")) {
		return localConfig.href;
	}

	return localConfig.pathname;
};
