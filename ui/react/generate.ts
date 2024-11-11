import fs from "node:fs";
import path from "node:path";
import { generateReactWrappers } from "custom-element-react-wrappers";
import manifest from "../base/custom-elements.json";

const componentsDir = path.join(process.cwd(), "src/components");
const exportsDir = path.join(process.cwd(), "src/exports");

function getComponentFiles(componentsDir: string) {
	const componentFiles = fs
		.readdirSync(componentsDir)
		.filter(
			(file) =>
				file.endsWith(".js") &&
				!file.includes("react-utils") &&
				!file.includes("index"),
		);

	return componentFiles;
}

function generateExports() {
	if (!fs.existsSync(exportsDir)) {
		fs.mkdirSync(exportsDir, { recursive: true });
	}

	const componentFiles = getComponentFiles(componentsDir);

	componentFiles.forEach((componentFile) => {
		const componentName = path.basename(componentFile, ".js");
		const exportContent = `export { ${componentName} as default } from "../components/${componentName}.js";`;
		const exportPath = path.join(exportsDir, `${componentName}.ts`);

		fs.writeFileSync(exportPath, exportContent);
	});

	console.log(
		`Generated ${componentFiles.length} export files in ${exportsDir}`,
	);
}

function adaptForPreact() {
	const componentFiles = getComponentFiles(componentsDir);
	componentFiles.forEach((componentFile) => {
		const componentPath = path.join(componentsDir, componentFile);

		const content = fs.readFileSync(componentPath, { encoding: "utf8" });

		const updatedContent = content
			.replaceAll(
				`import React, { forwardRef, useImperativeHandle } from "react";`,
				`import { createElement, forwardRef, useImperativeHandle } from "preact/compat";`,
			)
			.replaceAll(`React.createElement`, `createElement`);

		fs.writeFileSync(componentPath, updatedContent);
	});

	console.log(`Adapted ${componentFiles.length} to preact`);
}

function generateReactWrapperComponents() {
	type Options = Parameters<typeof generateReactWrappers>[1];

	const options = {
		attributeMapping: {
			for: "_for",
		},

		modulePath: () => `@poc/ui/base`,
		// modulePath: (className, tagName) => `../../src/${tagName}/${className}.js`,

		outdir: componentsDir,
		defaultExport: true,
		descriptionSrc: "description",
	} satisfies Options;

	generateReactWrappers(manifest, options);
}

generateReactWrapperComponents();
adaptForPreact();
generateExports();

// export { Card as default } from "../components/Card.js";
