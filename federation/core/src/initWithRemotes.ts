import { init } from "@module-federation/runtime";
import type { Remote } from "@module-federation/runtime/types";
import { z } from "zod";

let initializedWithRemotes = false;
export const initWithRemotes = async (name: string, remoteUrl: string) => {
	if (initializedWithRemotes) {
		return;
	}

	initializedWithRemotes = true;

	console.groupCollapsed(`configure module ${name}`);

	try {
		const fetchedRemotes = await get(remoteUrl);

		const remotes: Remote[] = [];

		for (const remote in fetchedRemotes) {
			if (!fetchedRemotes[remote]) {
				console.error(`could not find remote ${remote}`);
				continue;
			}

			remotes.push({
				name: remote,
				type: "module",
				entry: fetchedRemotes[remote],
				entryGlobalName: remote,
				shareScope: "default",
			});
		}

		console.table(fetchedRemotes);

		const host = init({
			name,
			remotes,
		});

		console.log("final host", host);
	} catch (error) {
		console.error("something went wrong!", error);
	}

	console.groupEnd();
};

const remotesSchema = z.record(z.string(), z.string());

export type Remotes = z.infer<typeof remotesSchema>;

const get = async (remoteUrl: string): Promise<Remotes> => {
	const response = await fetch(remoteUrl);

	if (!response.ok) {
		throw new Error("failed to fetch remotes");
	}

	const data = await response.json();

	// TODO: how to handle config error
	const parsed = remotesSchema.safeParse(data);

	if (parsed.success) {
		return parsed.data;
	}

	console.error(parsed.error);

	throw new Error("failed to validate remotes");
};
