export function purgeEmpty(obj: Record<string, string>) {
	return Object.fromEntries(
		Object.entries(obj).filter(([_, v]) => v != null && v !== ""),
	);
}
