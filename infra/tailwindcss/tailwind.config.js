import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},

		extend: {
			colors: {
				brand: { DEFAULT: "#FFCC00" },
			},
			boxShadow: {
				card: "0px 0px 2px 0px rgba(0,0,0,0.16), 0px 2px 4px 0px rgba(0,0,0,0.16)",
			},
		},
	},

	plugins: [
		plugin(({ matchVariant }) => {
			matchVariant(
				"part",
				(value) => {
					return `&::part(${value})`;
				},
				{
					values: {},
				},
			);
		}),
	],
};
