import "~/shell/shell1/tailwind.css";

import type { PropsWithChildren } from "react";
import { Topbar } from "~/shell/shell1/components/Topbar";

export const Layout = ({ children }: PropsWithChildren) => {
	return (
		<div className="min-h-screen flex flex-col bg-neutral-50">
			<Topbar />

			<main className="flex-1 flex flex-col p-4 items-stretch">
				<div className="container mx-auto h-full w-full">{children}</div>
			</main>
		</div>
	);
};
