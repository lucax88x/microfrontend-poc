export interface Workspace {
	catalogs: {
		tailwindcss: {
			tailwindcss: string;
			postcss: string;
			autoprefixer: string;
		};
		react: {
			react: string;
			"react-dom": string;
			"@types/react": string;
			"@types/react-dom": string;
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
