// This script is used to copy the types from the src/components directory to the dist/components directory

import fs from "node:fs";
import path from "node:path";

const componentsDir = path.join(process.cwd(), "src/components");
const distTypesDir = path.join(process.cwd(), "dist/components");

function getComponentTypes(componentsDir: string) {
	return fs.readdirSync(componentsDir).filter((file) => file.endsWith(".d.ts"));
}

function copyTypes() {
	if (!fs.existsSync(distTypesDir)) {
		fs.mkdirSync(distTypesDir, { recursive: true });
	}

	const componentTypes = getComponentTypes(componentsDir);

	for (const file of componentTypes) {
		const fullPath = path.join(componentsDir, file);
		const outputPath = path.join(distTypesDir, file);

		const dtsContent = fs.readFileSync(fullPath, { encoding: "utf8" });

		fs.writeFileSync(outputPath, dtsContent);
	}

	console.log(`copied ${componentTypes.length} types`);
}

copyTypes();
