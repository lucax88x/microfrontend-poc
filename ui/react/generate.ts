import { generateReactWrappers } from "custom-element-react-wrappers";
import fs from "node:fs";
import path from "node:path";
import manifest from "../base/custom-elements.json";

function generateExports() {
  const componentsDir = path.join(process.cwd(), "src/components");
  const exportsDir = path.join(process.cwd(), "src/exports");

  // Create exports directory if it doesn't exist
  if (!fs.existsSync(exportsDir)) {
    fs.mkdirSync(exportsDir, { recursive: true });
  }

  // Read all .js files from components directory, excluding react-utils and index
  const componentFiles = fs
    .readdirSync(componentsDir)
    .filter(
      (file) =>
        file.endsWith(".js") &&
        !file.includes("react-utils") &&
        !file.includes("index"),
    );

  // Generate export files
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

function generateReactWrapperComponents() {
  type Options = Parameters<typeof generateReactWrappers>[1];

  const options = {
    attributeMapping: {
      for: "_for",
    },

    modulePath: () => `@poc/ui/base`,
    // modulePath: (className, tagName) => `../../src/${tagName}/${className}.js`,

    outdir: `src/components`,
    defaultExport: true,
    descriptionSrc: "description",
  } satisfies Options;

  generateReactWrappers(manifest, options);
}

generateReactWrapperComponents();
generateExports();

// export { Card as default } from "../components/Card.js";
