import "../index.css";

import type { PropsWithChildren } from "preact/compat";

import { type QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ListDocs from "~/components/ListDocs";

export const AsyncListDocs = ({
	queryClient,
}: PropsWithChildren<{ queryClient: QueryClient }>) => {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />

			<ListDocs />
		</QueryClientProvider>
	);
};

export default AsyncListDocs;
