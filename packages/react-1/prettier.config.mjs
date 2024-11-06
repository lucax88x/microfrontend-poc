// @ts-check
import defaultConfig from "@poc/shared/prettier-config/prettier.config.mjs";

export default {
	...defaultConfig,
	plugins: [...defaultConfig.plugins, "prettier-plugin-tailwindcss"],
};
