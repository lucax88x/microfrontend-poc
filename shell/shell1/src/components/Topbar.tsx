import { LazyUserAvatar } from "@poc/federation-package-components/LazyUserAvatar";

export const Topbar = () => {
	return (
		<div className="flex w-full items-center justify-center gap-3 bg-gray-700 py-4 shadow-md">
			<h1 className="text-center font-semibold text-white text-xl">
				POC federation
			</h1>
			<LazyUserAvatar user="Marco Rossi" />
		</div>
	);
};
