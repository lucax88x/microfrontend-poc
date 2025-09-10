import "#tailwind.css";

import type { PropsWithChildren } from "react";
import { Topbar } from "#components/Topbar";

export const Layout = ({ children }: PropsWithChildren) => {
	return (
		<div className="flex min-h-screen flex-col bg-neutral-50">
			<Topbar />

			<main className="flex flex-1 flex-col items-stretch p-4">
				<div className="container mx-auto h-full w-full">{children}</div>
			</main>
		</div>
	);
};
