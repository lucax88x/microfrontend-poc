import { determineFederationRemotesEndpoint } from "@poc/federation-core/determineFederationRemotesEndpoint";
import { initWithRemotes } from "@poc/federation-core/initWithRemotes";

export const initModule = () =>
	initWithRemotes(
		"@poc/package-components",

		determineFederationRemotesEndpoint(
			new URL(
				"https://localhost:5301/package/components/remotes/package-components.json",
			),
		),
	);
