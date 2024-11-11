export interface Workspace {
	catalogs: {
		tailwindcss: {
			tailwindcss: string;
			postcss: string;
			autoprefixer: string;
		};
		preact: {
			preact: string;
		};
		vite: {
			vite: string;
			"@vitejs/plugin-react": string;
			"@module-federation/vite": string;
			"vite-tsconfig-paths": string;
			yaml: string;
		};
	};
	catalog: {
		typescript: string;
	};
}
