import { LazyUserAvatar } from "@poc/federation/package/components/src/LazyUserAvatar";

export const Topbar = () => {
	return (
		<div className="w-full bg-gray-700 py-4 shadow-md flex justify-center items-center gap-3">
			<h1 className="text-white text-xl font-semibold text-center">
				POC federation
			</h1>
			<LazyUserAvatar user="Marco Rossi" />
		</div>
	);
};
