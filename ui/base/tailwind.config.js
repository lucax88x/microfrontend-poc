import tailwindConfig from "../../infra/tailwindcss/tailwind.config.js";

/** @type {import('tailwindcss').Config} */
export default {
	...tailwindConfig,
	prefix: "ui-",
};
