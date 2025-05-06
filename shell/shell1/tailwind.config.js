import tailwindConfig from "../../infra/tailwindcss/tailwind.config.js";

/** @type {import('tailwindcss').Config} */
export default {
	...tailwindConfig,
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
};
