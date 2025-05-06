export interface Logger {
	log: (...args: unknown[]) => void;
	error: (...args: unknown[]) => void;
	debug: (...args: unknown[]) => void;
}

export const logger = {
	log: console.log,
	error: console.error,
	debug: console.debug,
} satisfies Logger;
