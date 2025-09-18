import fs from "node:fs";
import path from "node:path";
import manifest from "@poc/ui-base/custom-elements.json";
import { generateReactWrappers } from "custom-element-react-wrappers";

const componentsDir = path.join(process.cwd(), "src/components");

function getComponentFiles(componentsDir: string) {
	return fs
		.readdirSync(componentsDir)
		.filter(
			(file) =>
				file.endsWith(".js") &&
				!file.includes("react-utils") &&
				!file.includes("index"),
		);
}

function appendDefaultExport() {
	const componentFiles = getComponentFiles(componentsDir);

	for (const componentFile of componentFiles) {
		const componentName = path.basename(componentFile, ".js");
		const exportContent = `export default ${componentName};`;

		const componentFilePath = path.join(componentsDir, componentFile);
		const componentDtsPath = path.join(componentsDir, `${componentName}.d.ts`);

		fs.appendFileSync(componentFilePath, exportContent);
		fs.appendFileSync(componentDtsPath, exportContent);
	}

	console.log(`appended default exports to ${componentFiles.length} files`);
}

function removeUiBaseImport() {
	const componentFiles = getComponentFiles(componentsDir);
	for (const componentFile of componentFiles) {
		const componentJsPath = path.join(componentsDir, componentFile);

		const jsContent = fs.readFileSync(componentJsPath, { encoding: "utf8" });

		const updatedJsContent = jsContent
			.replaceAll(/import\s+["']@poc\/ui-base\/.*?["'];?\n?/g, "")
			.replaceAll(' ? "" : undefined', "");

		fs.writeFileSync(componentJsPath, updatedJsContent);
	}

	console.log(`removed ui/base to ${componentFiles.length}`);
}

function generateReactWrapperComponents() {
	type Options = Parameters<typeof generateReactWrappers>[1];

	const options = {
		attributeMapping: {
			for: "_for",
		},

		modulePath: (_, tagName) => {
			// To match the /ui/base file structure, we use the tagName to determine the path.
			// The _ (underscore) is used to have sub components in the same file
			// Example: poc-button -> button

			const filePath = tagName
				// Remove the poc- prefix only if it is at the start of the string
				.replace("poc-", (match, offset) => (offset === 0 ? "" : match))
				// Split the tagName by the - character
				.split("-")
				// Remove any sub component from path
				.map((part) => part.split("_")[0])
				// Join the parts by the - character
				.join("-");

			return `@poc/ui-base/${filePath}`;
		},

		outdir: componentsDir,
		defaultExport: false,
		descriptionSrc: "description",

		exclude: ["Root"],
	} satisfies Options;

	// @ts-expect-error Manifest does not have the correct type
	generateReactWrappers(manifest, options);
}

function purgeComponents() {
	if (fs.existsSync(componentsDir)) {
		fs.rmSync(componentsDir, { recursive: true });

		console.log("purged existing folder");
	}
}

purgeComponents();
generateReactWrapperComponents();
removeUiBaseImport();
// adaptForPreact();
appendDefaultExport();
