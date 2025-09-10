import fs from "node:fs";
import path from "node:path";

const componentsDir = path.join(process.cwd(), "src/components");
const distTypesDir = path.join(process.cwd(), "dist/types");

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

		const updatedJsContent = dtsContent.replaceAll(
			"@poc/ui-base/",
			"../../../base/dist/types/",
		);

		fs.writeFileSync(outputPath, updatedJsContent);
	}

	console.log(`copied ${componentTypes.length} types`);
}

copyTypes();
