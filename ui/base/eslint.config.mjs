import configs from "@liveryvideo/biome-lit/eslint";

// biome doesnt have wc and lit lint rules yet
export default [
	...configs,
	{
		ignores: [
			...configs[0].ignores,
			".__mf__temp/",
			"scripts",
			".storybook",
			"src/*.stories.ts",
			"vite.config.ts",
		],
	},
	{
		rules: {
			"perfectionist/sort-union-types": "off",
			"perfectionist/sort-classes": "off",
			"perfectionist/sort-objects": "off",
			"perfectionist/sort-switch-case": "off",
		},
	},
];
