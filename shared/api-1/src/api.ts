import createClient from "openapi-fetch";
import type { paths } from "~/openapi/petstore";

export const createApi1Client = () => {
	const client = createClient<paths>({
		baseUrl: "https://petstore3.swagger.io/api/v3",
	});

	return client;
};
