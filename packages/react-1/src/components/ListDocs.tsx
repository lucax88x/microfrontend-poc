import { lazy, Suspense } from "preact/compat";
import "../index.css";

import { useQuery } from "@tanstack/react-query";
const UiSpinner = lazy(async () => import("@poc/ui/react/spinner"));
// import { someFunction } from "@poc/shared/api1/api";

const api = () => import("@poc/shared/api1/api");

export const ListDocs = () => {
	const { isPending, error, data, isFetching } = useQuery({
		queryKey: ["repoData"],
		queryFn: async () => {
			const a = await api();
			const client = a.createApi1Client();
			const response = await client.GET("/pet/{petId}", {
				params: { path: { petId: 5 } },
			});

			return response.data;
		},
	});

	if (isPending)
		return (
			<Suspense fallback="loading">
				<UiSpinner />
			</Suspense>
		);

	if (error) return `An error has occurred: ${error.message}`;

	console.log(data);

	return (
		<div>
			<h1>{data.full_name}</h1>
			<p>{data.description}</p>
			<strong>👀 {data.subscribers_count}</strong>{" "}
			<strong>✨ {data.stargazers_count}</strong>{" "}
			<strong>🍴 {data.forks_count}</strong>
			<div>{isFetching ? "Updating..." : ""}</div>
		</div>
	);
};

export default ListDocs;
