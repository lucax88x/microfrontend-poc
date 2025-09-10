import { loadRemote } from "@module-federation/runtime";
import { initWithRemotes } from "@poc/federation-core/initWithRemotes";

const initModule = () =>
	initWithRemotes("@poc/shell/shell1", "/remotes/shell.json");

const preloadModules = async (): Promise<void> => {
	try {
		console.info("preloading modues");
		await loadRemote("@poc/ui-base");
		console.info("preloaded modules");
	} catch (error) {
		// TODO: error
		console.error("Error preloading remote modules :", error);
	}
};

export const init = async () => {
	console.groupCollapsed("bootstrapping shell shell1");
	try {
		await initModule();
		await preloadModules();
	} catch (error) {
		console.error(error);
		return false;
	}
	console.groupEnd();

	return true;
};
